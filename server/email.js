const express=require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const emailRouter = express.Router();
const nodemailer = require('nodemailer');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

emailRouter.route('/')
.options(cors.cors, (req, res) => {
    res.sendStatus(200);
})

.post(cors.cors, (req, res) => {

  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_MDP
    }
  });

  const mailOptions = {
    from: req.body.mail,
    to: process.env.MAIL_USER_TO,
    subject: req.body.objet,
    html:`<p>De ${req.body.prenom} ${req.body.nom}</p>
    <br>
    <p>E-mail : ${req.body.mail}</p>
    <br>
    <pre>${req.body.message}</pre>`
  };

  transporter.sendMail(mailOptions, function(error){
    if (error) {
      console.log(error);
      res.status(500);
    } else {
      res.status(200).json({
        success: true
    });
    }
  });
})


module.exports = emailRouter;
