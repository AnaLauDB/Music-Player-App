import http from "node:http";

import { env } from "./config/env.js";
import { matchRoute } from "./lib/router.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import routes from "./routes/index.js";

const enhanceResponse = (res) => {
    res.status = (statusCode) => {
        res.statusCode = statusCode;

        return res;
    };

    res.json = (payload) => {
        if (!res.headersSent) {
            res.setHeader(
                "Content-Type",
                "application/json; charset=utf-8"
            );
        }

        res.end(JSON.stringify(payload));

        return res;
    };
};

const applyCors = (req, res) => {
    const origin = req.headers.origin;

    if (origin && env.clientOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);

        res.setHeader("Vary", "Origin");
    }

    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Accept"
    );
};

const handleRequest = async (req, res) => {
    enhanceResponse(res);

    applyCors(req, res);

    if (req.method === "OPTIONS") {
        res.statusCode = 204;

        res.end();

        return;
    }

    const url = new URL(
        req.url,
        `http://${req.headers.host || "localhost"}`
    );

    if (!url.pathname.startsWith("/api")) {
        notFound(req, res);

        return;
    }

    const apiPath = url.pathname.slice("/api".length) || "/";

    const match = matchRoute(routes.routes, req.method, apiPath);

    if (!match) {
        notFound(req, res);

        return;
    }

    req.params = match.params;

    req.query = Object.fromEntries(url.searchParams.entries());

    const next = (error) => errorHandler(error, req, res);

    try {
        await match.route.handler(req, res, next);
    } catch (error) {
        next(error);
    }
};

const app = {
    createServer() {
        return http.createServer(handleRequest);
    },
};

export default app;
