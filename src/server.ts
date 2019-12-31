import * as Koa from 'koa';
import routing from './routes/';
import * as path from 'path';
import * as bodyParse from 'koa-bodyparser';
import * as staticFiles from 'koa-static';
import * as cors from '@koa/cors';
import { config } from './config';

const app = new Koa();

// 如果需要提供跨域资源配置下面的cors
/* app.use(cors()); */

app.use(bodyParse());

routing(app);

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, './public')));

app.listen(config.port, () => {
  console.log(`✅  The server is running at http://localhost:${config.port}/`);
});
