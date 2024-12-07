const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, DevOps POC!');
});

app.listen(3000, () => {
    console.log('App running on http://localhost:3000');
});
