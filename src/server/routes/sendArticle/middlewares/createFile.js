const jsdom = require("jsdom").jsdom;
const fs = require("fs");

const createFile = (req, res, next) => {
    fs.writeFile(
        "article.html",
        "<!doctype html><head><meta charset='utf-8'><title>" +
            req.article.title +
            "</title></head><body>" +
            req.article.content +
            "</body></html>",
        err => {
            if (err) {
                res.status(200).json("Error while processing file.");
            } else {
                next();
            }
        }
    );
};

module.exports = createFile;
