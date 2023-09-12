import Elysia, { ws } from "elysia";
import { appRouter } from "./routes";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
    .use(staticPlugin())
    .use(ws())
    .use(appRouter)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
