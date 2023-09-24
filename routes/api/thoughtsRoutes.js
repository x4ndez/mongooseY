const router = require("express").Router();
const {

    getAllThoughts,

} = require("../../controllers/thoughtsController");

// PATH: localhost/api/thoughts

router
    .route("/")
    .get(getAllThoughts);

module.exports = router;