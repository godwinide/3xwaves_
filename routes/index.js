const router = require("express").Router();


router.get("/", (req, res) => {
    return res.render("index");
})

router.get("/competiton", (req, res) => {
    return res.render("competition");
})

module.exports = router;