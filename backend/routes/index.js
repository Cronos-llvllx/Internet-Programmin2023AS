import  express  from "express";
import * as base from "../Models/all.js"
const router = express.Router();

router.use('/',base.inseruser);

export default router