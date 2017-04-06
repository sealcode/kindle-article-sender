const articleURLRegex = new RegExp(
    /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/
);

const validateUrl = (req, res, next) => {
    if (req.body.articleURL && articleURLRegex.test(req.body.articleURL)) {
        next();
    } else {
        res.status(422).json("Invalid article URL");
    }
};

module.exports = validateUrl;
