const kindleEmailRegex = new RegExp(/[a-z0-9._%+-]+@kindle\.com$/);

const validateKindleEmail = (req, res, next) => {
    if (req.body.kindleEmail && kindleEmailRegex.test(req.body.kindleEmail)) {
        next();
    } else {
        res.status(422).json("Invalid kindle email");
    }
};

module.exports = validateKindleEmail;
