import app from './app/index.js';

const port = process.env.PORT || '3000';

app.listen(port, '0.0.0.0', () => {
  console.log('Starting app...');
});
