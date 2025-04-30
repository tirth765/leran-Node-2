// const nodemailer = require('nodemailer');

// const Mailer = async (email, subject, massage) => {

//     try {
//         var transporter = await nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'tirth.patel6521@gmail.com',
//                 pass: 'ftic xesq dhyv mmrl'
//             },
//             tls: {
//                 rejectUnauthorized: false
//               }
//         });

//         var mailOptions = {
//             from: 'tirth.patel6521@gmail.com',
//             to: email,
//             subject: subject,
//             text: massage
//         };

//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Email sent: ' + info.response);
//             }
//         });
//     } catch (error) {
//         console.log("error", error);
//     }
// }
// module.exports = Mailer


// const nodemailer = require('nodemailer');

const { Resend } = require('resend');

const Mailer = async (email, subject, massage) => {

    try {
       

        const resend = new Resend('re_FpcypgzM_Bx4G3GNEL9uBYjYA86rWMTWi');

        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: email,
          subject: subject,
          html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });

        return true

    } catch (error) {
        console.log("error", error);

        throw new Error("Error in Resend")
    }
}
module.exports = Mailer