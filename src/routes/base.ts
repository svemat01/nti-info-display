import { logger } from "@bogeychan/elysia-logger";
import html from "@elysiajs/html";
import Elysia, { ws } from "elysia";

export const ElysiaBase = new Elysia()
    .use(html())
    .use(logger())
    .use(ws());