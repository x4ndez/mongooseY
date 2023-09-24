const router = require("express").Router();
const {

    getAllUsers,
    getUserById,

} = require("../../controllers/usersController");

// PATH: localhost/api/users

router
    .route("/")
    .get(getAllUsers);

router
    .route("/:_id")
    .get(getUserById);

module.exports = router;