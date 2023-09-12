import Elysia, { ws } from "elysia";
import { ElysiaBase } from "./base";
import { Home } from '@/pages/home';

export const appRouter = new Elysia()
    .use(ElysiaBase)
    .get("/", () => <Home />)
    .use(ws())
    .ws('/live-reload', {
        message(ws, message) {
            console.log(message);
        }
    });
