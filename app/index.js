import express from 'express';
import bodyParser from 'body-parser';

import {router as healthcheckRouter} from './healthcheck/routes.js';

const app = express();
app.use(bodyParser.json());

app.use('/api/health', healthcheckRouter);

export default app;
