// npm bcrypt download for creating hash password

//npm i jsonwebtoken for creating access token and refresh token

//npm i cookie-parser for creating cookie

//npm i nodemailer is used for send mail

//twilio is used for send otp and after verify otp ( used twilio website )

//npm i pdfmake is used for make pdf of user ( in npm pdfmake, go on github )

const pdfmake = require("pdfmake");

var fonts = {
  Roboto: {
    normal: "public/font/static/Roboto-Regular.ttf",
    bold: "public/font/static/Roboto-Medium.ttf",
    italics: "public/font/static/Roboto-Italic.ttf",
    bolditalics: "public/font/static/Roboto-MediumItalic.ttf",
  },
};

var PdfPrinter = require("pdfmake");
var printer = new PdfPrinter(fonts);
var fs = require("fs");

const CreatePDF = (docDefinition, name) => {
  try {
    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(`public/user_pdf/${name}.pdf`));
    pdfDoc.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = CreatePDF;
