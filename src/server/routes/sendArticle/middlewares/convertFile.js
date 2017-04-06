const exec = require("child_process").exec;

const convertFile = (req, res, next) => {
    exec("pandoc -S article.html -o article.epub", (err, stdout, stderr) => {
        if (err) {
            res.status(500).json("Error while processing file.");
        } else {
            exec("ebook-convert article.epub article.mobi", err => {
                if (err) {
                    res.status(500).json("Error while processing file.");
                } else {
                    next();
                }
            });
        }
    });
};

module.exports = convertFile;
