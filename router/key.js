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
    .all('/keys',async (ctx, next) => {
        console.log(`请求了:${ctx.req.url}`);
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

app
  .use(router.routes())
  .use(router.allowedMethods());

router.get("keys",async function(req,res){
  
});