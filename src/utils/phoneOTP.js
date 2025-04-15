require('dotenv').config()
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);


console.log("tttt",accountSid, authToken);

console.log("dddd",process.env.services);


const PhoneNumberOTP = async () => { 
  try {

    const verification = await client.verify.v2
      .services(process.env.services)
      .verifications.create({
        channel: "sms",
        to: "+916352359713",
      })
      .then(verification_check => console.log(verification_check.status))
      .catch(error => console.log(error))

  } catch (error) {
    console.log(error);
  }
};

const OTPVarification = async (otp) => {
  try {
    console.log(otp);

    const verificationCheck = await client.verify.v2
      .services(process.env.services)
      .verificationChecks.create({
        code: otp,
        to: "+916352359713",
      });

    return verificationCheck.status

  } catch (error) {
    console.log(error);

  }
}



module.exports = { PhoneNumberOTP, OTPVarification };
