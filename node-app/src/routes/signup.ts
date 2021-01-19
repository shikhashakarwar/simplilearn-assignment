import * as express from 'express';
import { saveSignupData } from '../controller/signup';
const router = express.Router();

router.post("/", saveSignupData);

export default router;