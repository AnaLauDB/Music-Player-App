import { createRouter } from "../lib/router.js";

import healthRoutes from "./healthRoutes.js";
import musicRoutes from "./musicRoutes.js";

const router = createRouter();

router.use("/health", healthRoutes);

router.use("/music", musicRoutes);

export default router;
