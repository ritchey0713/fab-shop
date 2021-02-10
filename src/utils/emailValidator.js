const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// export default (emailsArr) => {
//   console.log(emailsArr);
//   if (emailsArr.length) {
//     const invalidEmails = emailsArr
//       .map((email) => email.trim())
//       .filter((email) => re.test(email) === false);

//     if (invalidEmails.length) {
//       return `These emails are invalid: ${invalidEmails}`;
//     }
//   }

//   return;
// };

export default (email) => {
  const emailCheck = email.trim();

  if (re.test(emailCheck) === false) {
    return "Incorrect format please check email";
  }
};
