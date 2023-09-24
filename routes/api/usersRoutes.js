const router = require("express").Router();
const {

    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,

} = require("../../controllers/usersController");

// PATH: localhost/api/users

router
    .route("/")
    .get(getAllUsers)
    .post(createUser);
// .delete(deleteUserById);

router
    .route("/:_id")
    .get(getUserById);

// PUT to update a user by its _id

// DELETE to remove user by its _id

module.exports = router;