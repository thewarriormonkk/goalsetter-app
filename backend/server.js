const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express()

// middleware
app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});