import { createRouter } from "../lib/router.js";

const router = createRouter();

router.get("/", (_req, res) => {
    res.json({
        status: "ok",
        service: "music-player-api",
    });
});

export default router;
