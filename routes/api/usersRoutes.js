const router = require("express").Router();
const {

    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    deleteFriend,

} = require("../../controllers/usersController");

// PATH: localhost/api/users

router
    .route("/")
    .get(getAllUsers)
    .post(createUser)
    .put(updateUserById)
    .delete(deleteUserById);

router
    .route("/:_id")
    .get(getUserById);

//BONUS: Remove a user's associated thoughts when deleted.

router
    .route("/:userId/friends/:friendId")
    .post(addFriend);
// .delete(deleteFriend);



module.exports = router;