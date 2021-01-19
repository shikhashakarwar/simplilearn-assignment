import * as express from 'express';

import signup from './signup';
import login from './login';
import user from './user';

const router = express.Router();

router.use('/signup', signup);
router.use('/login', login);
router.use('/user', user);


export const routes = router;