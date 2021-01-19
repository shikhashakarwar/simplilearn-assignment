import * as express from 'express';
import { loginData } from '../controller/login';
const router = express.Router();

router.post("/", loginData);

export default router;