const Koa = require('koa');
const Router = require('koa-router');
const koaStatic = require('koa-static');
const koaBodyparser = require('koa-bodyparser');
const axios = require('axios');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
  ctx.body = response.data;
});

app.use(koaBodyparser());
app.use(router.routes());
app.use(koaStatic('public'));

app.listen(3000);
console.log('Server running at http://localhost:3000/');
