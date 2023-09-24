const router = require("express").Router();
const {

    getAllThoughts,
    createThought,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
    pushReactionToThought,

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

router
    .route("/:thoughtId/reactions")
    .post(pushReactionToThought)

module.exports = router;