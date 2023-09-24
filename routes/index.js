const router = require("express").Router();

// PATH: localhost/

router.use("/api", require("./api"));

router.get("*", (req, res) => {
    res.json("Not found.");
});

module.exports = router;