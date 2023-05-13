import { config } from "dotenv";
import bddconfig from './bddconfig.js';
config();

export default {
  port: process.env.PORT || 4000,
  bddconfig:bddconfig
};