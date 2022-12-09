import express from 'express';
import '../db/db.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8999;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}/`)
);

/**
 * Create a standard handler and controller REST API
 * that return different levels of the query that we went through
 * 1. Route to get all sales
 * 2. Route to filter for iPhone 14s and in GB only
 *    - Each request should be validated via a middleware
 *        E.g. country and the model_name should be checked to only contain strings
 *             you can use an external library if you want but it's probably quicker
 *             to just have a small and naive check
 *.   - Should also return the percentage increase between period 1 and 2
 */

app.get('/', (_req, res) => res.send('This is a nodejs service'));
