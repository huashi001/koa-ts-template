/* import 'babel-polyfill'; */
import * as Router from 'koa-router';
/* import { baseApi } from '../config'; */
import home from '../controllers/Home'

const api = 'home';

const router = new Router();

router.prefix(`/${api}`);

// get /home/welcome
router.get('/', home.welcome);

// post /home/go
router.post('/go', home.go);

export default router;
