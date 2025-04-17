const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Email transporter configuration using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karthika8849@gmail.com", 
    pass: "bkmahjxluwlktsyw",   
  },
});

// Endpoint to handle the contact form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Setup the email options
  const mailOptions = {
    from: email,
    to: "karthika8849@gmail.com",  
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ status: "error", message: error });
    }
    res.status(200).send({ status: "success", message: "Email sent successfully!" });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
