/* import 'babel-polyfill'; */
import * as Router from 'koa-router';
/* import { baseApi } from '../config';*/
import hello from '../controllers/Hello'

const api = 'hello';

const router = new Router();

router.prefix(`/${api}`);

// POST /hello
router.post('/', hello.idg);

// get /hello/template
router.get('/template', hello.template);

export default router;
