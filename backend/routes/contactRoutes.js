const express = require("express");
const Contact = require("../models/Contact");
const { sendMail } = require("../utils/emailService");
const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create new contact submission
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save to database
    await newContact.save();

    // Prepare email options
    const mailOptions = {
      from: {
        name: "Your Portfolio Contact Form",
        address: process.env.USER,
      },
      to: process.env.RECIPIENT_EMAIL, // Your email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await sendMail(mailOptions);

    res.status(201).json({
      message: "Contact submission saved and email sent successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
});

module.exports = router;
