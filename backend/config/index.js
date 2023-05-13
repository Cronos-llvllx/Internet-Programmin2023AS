import { config } from "dotenv";
import bddcptconfig from './bddcptconfig.js';
config();

export default {
  port: process.env.PORT || 4000,
  bddcptconfig:bddcptconfig
};