require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;
const server = process.env.SERVER;
const ip = process.env.IP || 'localhost';

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'assets/favicon.ico')));
app.set('trust proxy', 1);

const rootLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
});

app.get('/api/health', rootLimiter, (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        nodeVersion: process.version
    });
});

app.listen(port, ip, () => {
    console.log(`Server running on http://${ip}:${port}`);
});
