const FCM = require('fcm-node');
const fcm = new FCM(process.env.FireBaseServerKey);

function sendNotification({ token, title, body, data = {} }) {
    return new Promise((resolve, reject) => {
      var message = {
        to: token,
        notification: {
          title,
          body
        },
        data
      };
  
      // console.log("Sending Push Notification", message);
      // console.log("FCM Token", token)
  
      fcm.send(message, function(err, response) {
        if (err) {
          console.log("Something has gone wrong sending a push notification!", err);
          resolve(err)
        } else {
          // console.log("Successfully sent with response: ", response);
          resolve(response);
        }
      })
    })
}

module.exports = sendNotification;