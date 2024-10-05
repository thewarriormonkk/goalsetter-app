const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 8000;

const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/goals', require('./routes/goalRoutes'));

// error handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});