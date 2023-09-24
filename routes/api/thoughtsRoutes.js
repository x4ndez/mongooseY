const router = require("express").Router();
const {

    getAllThoughts,
    createThought,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,

} = require("../../controllers/thoughtsController");

// PATH: localhost/api/thoughts

router
    .route("/")
    .get(getAllThoughts)
    .post(createThought)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

router
    .route("/:thoughtId")
    .get(getThoughtById)

module.exports = router;