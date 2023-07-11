const router = require("express").Router();


router.get("/", (req, res) => {
    return res.render("index");
})

router.get("/competition", (req, res) => {
    return res.render("competition");
})

module.exports = router;