import Koa from "koa"; 
import Router from "koa-router";
import { readFile } from "./utils/fs";
import { resolve } from "path";
import koaStatic from "koa-static";

const app = new Koa();
const router = new Router();

app.use(koaStatic(resolve("./dist")));

router.get("/(.*)", async (ctx) => {
    ctx.type = "html";
    ctx.body = await readFile(resolve("./dist/index.html"));
  });
  

app.use(router.routes());

app.listen(80);

console.log("Server running on port 80");
