import app from "./app.js";
import { env } from "./config/env.js";

const server = app.createServer();

server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(
            `El puerto ${env.port} ya está en uso. Cierra el proceso que lo ocupa o define otro PORT.`
        );

        process.exit(1);
    }

    throw error;
});

server.listen(env.port, () => {
    console.log(
        `API disponible en http://localhost:${env.port}/api`
    );
});
