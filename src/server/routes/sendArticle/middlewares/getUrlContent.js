const axios = require("axios");

const getUrlContent = (req, res, next) => {
    axios
        .get(req.body.articleURL, {
            headers: { Accept: "text/html" },
        })
        .then(response => {
            req.articleHtmlString = response.data;
            next();
        })
        .catch(error => {
            res.status(400).json(error);
        });
};

module.exports = getUrlContent;
