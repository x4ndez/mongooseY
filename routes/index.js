const router = require("express").Router();

// PATH: localhost/

router.use("/api", require("./api"));

module.exports = router;