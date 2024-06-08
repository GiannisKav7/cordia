const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sendGridMail = require("@sendgrid/mail");

admin.initializeApp();

const sendGridConfig = functions.config().sendgrid;

if (!sendGridConfig || !sendGridConfig.key || !sendGridConfig.sender) {
  console.error("SendGrid API key or sender email is not defined in environment configuration.");
  process.exit(1); // Exit the process with an error code
}

sendGridMail.setApiKey(functions.config().sendgrid.key);

exports.sendEmailNotification = functions.firestore
    .document("contacts/{docId}")
    .onCreate((snap, context) => {
      const data = snap.data();
      
      const msg = {
        to: "johnkav107@gmail.com", // Change to the recipient's email address
        from: functions.config().sendgrid.sender, // Use the email address from Firebase config
        subject: "New Cordia Website Form Submission",
        text: `You have a new message from ${data.name} (${data.email}): ${data.message}`,
        html: `<p>You have a new message from <strong>${data.name}</strong> (${data.email}):</p><p>${data.message}</p>`,
      };

      return sendGridMail.send(msg)
          .then(() => console.log("Email sent successfully!"))
          .catch((error) => console.error("Error sending email:", error));
    });
