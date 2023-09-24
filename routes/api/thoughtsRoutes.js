const router = require("express").Router();
const {

    getAllThoughts,
    createThought,

} = require("../../controllers/thoughtsController");

// PATH: localhost/api/thoughts

router
    .route("/")
    .get(getAllThoughts)
    .post(createThought);

module.exports = router;