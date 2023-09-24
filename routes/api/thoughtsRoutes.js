const router = require("express").Router();
const {

    getAllThoughts,
    createThought,
    getThoughtById,
    updateThoughtById,

} = require("../../controllers/thoughtsController");
const { updateMany } = require("../../models/Thoughts");

// PATH: localhost/api/thoughts

router
    .route("/")
    .get(getAllThoughts)
    .post(createThought)
    .put(updateThoughtById);

router
    .route("/:thoughtId")
    .get(getThoughtById)

module.exports = router;