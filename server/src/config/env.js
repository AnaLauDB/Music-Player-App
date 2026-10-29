import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const envPath = fileURLToPath(new URL("../../.env", import.meta.url));

if (existsSync(envPath) && typeof process.loadEnvFile === "function") {
    process.loadEnvFile(envPath);
}

export const env = {
    port: Number(process.env.PORT) || 5000,

    deezerApiUrl:
        process.env.DEEZER_API_URL || "https://api.deezer.com",

    clientOrigins: (
        process.env.CLIENT_ORIGIN ||
        "http://localhost:5173,http://localhost:4173"
    )
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean),
};
