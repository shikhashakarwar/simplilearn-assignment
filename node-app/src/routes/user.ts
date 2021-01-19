import * as express from 'express';
import { userData } from '../controller/user';
const router = express.Router();

router.get("/:userGUID", userData);

export default router;