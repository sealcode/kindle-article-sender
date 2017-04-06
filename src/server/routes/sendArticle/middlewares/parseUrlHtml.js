const jsdom = require("jsdom").jsdom;
const r = require("readability-node");

const parseUrlHtml = (req, res, next) => {
    const doc = jsdom(req.articleHtmlString, {
        features: {
            FetchExternalResources: false,
            ProcessExternalResources: false,
        },
    });

    req.article = new r.Readability(req.body.articleURL, doc).parse();
    next();
};

module.exports = parseUrlHtml;
