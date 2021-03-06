const express = require("express");
const jobsRoute = require("./routes/jobsRoute");
const usersRoute = require("./routes/usersRoute");
const passwordReset = require("./routes/passwordReset");
const app = express();
const db = require("./db.js");
const pdf = require("html-pdf");
const cors = require("cors");
const pdfTemplate = require("./documents");
require("dotenv").config();
const options = {
  height: "42cm",
  width: "29.7cm",
  timeout: "6000",
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use("/api/jobs/", jobsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/passwordReset", passwordReset);
app.use(cors());

// POST route for PDF generation....
app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
    if (err) {
      console.log(err);
      res.send(Promise.reject());
    } else res.send(Promise.resolve());
  });
});

// GET route -> send generated PDF to client...
app.get("/fetch-pdf", (req, res) => {
  const file = `${__dirname}/Resume.pdf`;
  res.download(file);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Node JS Server Started"));
