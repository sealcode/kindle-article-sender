const express = require("express"), mdws = require("./middlewares");

const sendArticle = () => {
    const router = express.Router();

    router.use(
        "/",
        mdws.validateKindleEmail,
        mdws.validateUrl,
        mdws.getUrlContent,
        mdws.parseUrlHtml,
        mdws.createFile,
        mdws.convertFile,
        mdws.sendEmail
    );

    router.route("/").post((req, res) => {
        res.status(200).json("OK:)");
    });

    return router;
};

module.exports = sendArticle;
