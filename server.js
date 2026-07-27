require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { Resend } = require("resend");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Serve static files under /lm-its
app.use("/lm-its", express.static(path.join(__dirname, "public")));

// Redirect root to /lm-its/
app.get("/", (req, res) => {
  res.redirect("/lm-its/");
});

// Serve index.html at /lm-its and /lm-its/
app.get("/lm-its", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/lm-its/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve privacy page
app.get("/lm-its/privacy.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacy.html"));
});

/* API ROUTE */
app.post("/send-email", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "john@linkmind.co.jp",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});