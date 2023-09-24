const router = require("express").Router();
const {

    getAllThoughts,
    createThought,
    getThoughtById,

} = require("../../controllers/thoughtsController");

// PATH: localhost/api/thoughts

router
    .route("/")
    .get(getAllThoughts)
    .post(createThought);

router
    .route("/:thoughtId")
    .get(getThoughtById)

module.exports = router;