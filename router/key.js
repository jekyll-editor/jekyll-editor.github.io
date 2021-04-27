/*
GET（SELECT）：从服务器取出资源（一项或多项）。
POST（CREATE）：在服务器新建一个资源。
PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
DELETE（DELETE）：从服务器删除资源。
*/

const Router = require('@koa/router');
const db = require("../database/relitdb")

const router = new Router();

router
    .head("/",async (ctx,next)=>{
        console.log(`请求了: head ${ctx.req.url}`);
    })
    .options("/",async (ctx,next)=>{
        console.log(`请求了: options ${ctx.req.url}`);
    })
    .get('/keys',async (ctx, next) => {
        ctx.body = await db.getAll()
    })
    .get('/keys/:id',async (ctx, next) => {
        ctx.body = await db.get(ctx.params.id)
    })
    .post('/keys/new',async (ctx, next) => {
        ctx.body = await db.get("key")
    })
    .put('/keys/:id',async (ctx, next) => {
        ctx.body = await db.get("key")
    })
    .del('/keys/:id',async (ctx, next) => {
        ctx.body = await db.get("key")
    })
    .all('/keys',async (ctx, next) => {
        console.log(`请求了:${ctx.req.url}`);
    })

module.exports = router;