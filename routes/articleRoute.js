const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/articleControllers");

router.route("/").get(articleControllers.getAllArticles);

module.exports = router;