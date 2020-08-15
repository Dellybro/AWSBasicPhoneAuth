const AWS = require('aws-sdk');

async function sendSMS({ token, body }) {
    var params = {
      PhoneNumber: token,
      Message: `${body}`
    }
  
    try {
      // console.log("Sending text to ", token);
      await new AWS.SNS().publish(params).promise()
      // console.log(`Message sent `, data);
    }
    catch(error) {
      console.log("Error sending text", error);
    }
  
    return;
}

module.exports = sendSMS;