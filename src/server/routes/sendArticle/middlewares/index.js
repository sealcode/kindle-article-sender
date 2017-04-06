const getUrlContent = require("./getUrlContent");
const parseUrlHtml = require("./parseUrlHtml");
const validateKindleEmail = require("./validateKindleEmail");
const validateUrl = require("./validateUrl");
const createFile = require("./createFile");
const convertFile = require("./convertFile");
const sendEmail = require("./sendEmail");

const mdws = {
    validateKindleEmail,
    validateUrl,
    getUrlContent,
    parseUrlHtml,
    createFile,
    convertFile,
    sendEmail,
};

module.exports = mdws;
