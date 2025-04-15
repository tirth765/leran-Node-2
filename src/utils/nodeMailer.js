const nodemailer = require('nodemailer');

const Mailer = async (email, subject, massage) => {

    try {
        var transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tirth.patel6521@gmail.com',
                pass: 'ftic xesq dhyv mmrl'
            },
            tls: {
                rejectUnauthorized: false
              }
        });

        var mailOptions = {
            from: 'tirth.patel6521@gmail.com',
            to: email,
            subject: subject,
            text: massage
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        console.log("error", error);
    }
}
module.exports = Mailer