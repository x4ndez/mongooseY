const express = require('express');
const routes = require("./routes");
const db = require('./config/mongodb');

const PORT = process.env.PORT || 3001;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(routes);

db.once('open', () => {
    server.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
