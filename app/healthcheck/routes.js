import * as controllers from './controllers.js';
import express from 'express';

export const router = express.Router();

router.get('/', controllers.get);
