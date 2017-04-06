const nodemailer = require("nodemailer");
const fs = require("fs");

const convertFile = (req, res, next) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "",
            pass: "",
        },
    });
    let mailOptions = {
        from: "testererererere2@gmail.com",
        to: req.body.kindleEmail,
        text: "Sent with kindle-email-sender.",
        subject: "",
        attachments: [
            {
                filename: req.article.title + ".mobi",
                content: fs.createReadStream("article.mobi"),
            },
        ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message %s sent: %s", info.messageId, info.response);
        next();
    });
};

module.exports = convertFile;
