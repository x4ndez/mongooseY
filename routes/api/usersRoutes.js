const router = require("express").Router();
const {

    getAllUsers,

} = require("../../controllers/usersController");

// PATH: localhost/api/users

router
    .route("/")
    .get(getAllUsers);

module.exports = router;