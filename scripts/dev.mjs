import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const npm = process.platform === "win32" ? "npm.cmd" : "npm";

const children = [
    spawn(npm, ["--prefix", "server", "run", "dev"], {
        cwd: root,
        stdio: "inherit",
        shell: process.platform === "win32",
    }),

    spawn(npm, ["--prefix", "client", "run", "dev"], {
        cwd: root,
        stdio: "inherit",
        shell: process.platform === "win32",
    }),
];

let shuttingDown = false;

const shutdown = (signal = "SIGTERM") => {
    if (shuttingDown) return;

    shuttingDown = true;

    children.forEach((child) => {
        if (!child.killed) {
            child.kill(signal);
        }
    });
};

process.on("SIGINT", () => {
    shutdown("SIGINT");

    process.exit(0);
});

process.on("SIGTERM", () => {
    shutdown("SIGTERM");

    process.exit(0);
});

children.forEach((child) => {
    child.on("exit", (code) => {
        if (code && code !== 0) {
            process.exitCode = code;
        }

        shutdown();
    });
});
