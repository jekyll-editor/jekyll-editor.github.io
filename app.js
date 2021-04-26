const Koa = require('koa');
const app = new Koa();
const routerKey = require("./router/key");

const static = require('koa-static');

// 错误处理
app.use(async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.set('WWW-Authenticate', 'Basic');
      ctx.body = 'cant haz that';
    } else {
      throw err;
    }
  }
});

app.use(routerKey.routes(),routerKey.allowedMethods());

app.use(static("public"));

app.use(async function pageNotFound(ctx) {
  ctx.status = 404;
  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html';
      ctx.body = '<p>页面未找到</p>';
      break;
    case 'json':
      ctx.body = {
        message: '页面未找到'
      };
      break;
    default:
      ctx.type = 'text';
      ctx.body = '页面未找到';
  }
});


app.listen(3000,()=>{
  console.log("http://localhost:3000")
});