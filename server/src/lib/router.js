const normalizePath = (path) => {
    const trimmed = path.replace(/\/+$/, "");

    if (!trimmed) return "/";

    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

const joinPaths = (prefix, path) =>
    normalizePath(`${prefix}/${path}`.replace(/\/+/g, "/"));

const matchPath = (routePath, pathname) => {
    const routeParts = routePath.split("/").filter(Boolean);

    const pathParts = pathname.split("/").filter(Boolean);

    if (routeParts.length !== pathParts.length) return null;

    const params = {};

    for (let index = 0; index < routeParts.length; index++) {
        const routePart = routeParts[index];

        const pathPart = pathParts[index];

        if (routePart.startsWith(":")) {
            params[routePart.slice(1)] = decodeURIComponent(pathPart);

            continue;
        }

        if (routePart !== pathPart) return null;
    }

    return params;
};

export const createRouter = () => {
    const routes = [];

    const register = (method, path, handler) => {
        routes.push({
            method,
            path: normalizePath(path),
            handler,
        });
    };

    const get = (path, handler) => register("GET", path, handler);

    const use = (prefix, router) => {
        router.routes.forEach((route) => {
            routes.push({
                ...route,
                path: joinPaths(prefix, route.path),
            });
        });
    };

    return {
        routes,
        get,
        use,
    };
};

export const matchRoute = (routes, method, pathname) => {
    for (const route of routes) {
        if (route.method !== method) continue;

        const params = matchPath(route.path, pathname);

        if (params) {
            return { route, params };
        }
    }

    return null;
};
