const router = require("express").Router();

// PATH: localhost/api/

router.use("/users", require("./usersRoutes"));
router.use("/thoughts", require("./thoughtsRoutes"));

module.exports = router;