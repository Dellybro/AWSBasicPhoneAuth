// const fs = require('fs');
// const path = require('path');


exports.handler = async (event) => {
//   function replaceAll(str, find, replace) {
//     return str.replace(new RegExp(find, 'g'), replace);
//   }

//   let template;
//   let link;

//   event.response = {
//     emailSubject: '',
//     emailMessage: template,
//     smsMessage: ``,
//   };

  switch (event.triggerSource) {
    case 'CustomMessage_ForgotPassword':
      break;
    case 'CustomMessage_SignUp':
    case 'CustomMessage_ResendCode':
      break;
    case 'CustomMessage_UpdateUserAttribute':
    case 'CustomMessage_VerifyUserAttribute':
      break;
    case 'CustomMessage_AdminCreateUser': 
      break;
    default:
  }
  return event;
};
  