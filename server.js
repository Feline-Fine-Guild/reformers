require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const port = process.env.PORT || 3000;
const server = process.env.SERVER;
const ip = process.env.IP || 'localhost';

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'assets/favicon.ico')));

app.listen(port, ip, () => {
    console.log(`Server running on http://${ip}:${port}`);
});
