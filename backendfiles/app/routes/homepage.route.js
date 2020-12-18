module.exports = app => {
    const game = require("../controllers/homepage.controller.js");
    var verifyToken = require('../middleware/authJwt');

    var router = require("express").Router();
    const cors = require("cors");

    const bodyParser = require("body-parser");
    router.use(bodyParser.json());
    router.use(cors());

    router.get("/",game.highscore);

    app.use('/api/homepage', router);

}
