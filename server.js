const express = require('express');
const db = require('./config/mongodb');

// const { Genre } = require('./models');
const { ObjectId } = require("mongodb");

const PORT = process.env.PORT || 3001;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

db.once('open', () => {
    server.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
