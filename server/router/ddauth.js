const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const nodemailer = require('nodemailer');

require('../db/conn');
const User = require('../model/userSchema');

// Create a transporter object with SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shriramuchiha66@gmail.com',
    pass: 'Dheeraj&6666' 
  }
});

router.get("/", (req, res) => {
  res.send("Yess!!! Server is running")
});

router.post("/register", async (req, res) => {
  const { name, email, password, cpassword, phone, address } = req.body;

  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(400).json({ error: "Please fill the data properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    } else {
      const user = new User({ name, email, password, cpassword, phone, address });
      const userRegister = await user.save();
      if (userRegister) {
        const mailOptions = {
          from: 'shriramuchiha66@gmail.com',
          to: email,
          subject: 'Successfully Registered!!',
          text: `Congratulations ${name}, You have been successfully registered`
        };

        // Sending mail with NodeMailer
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        res.status(200).json({ message: "Registration Successful" });
      } else {
        return res.status(400).json({ error: "Failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please enter data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000)
        });

        return res.status(200).json({ message: "Login Successful" });
      }
    } else {
      return res.status(400).json({ error: "User not registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/grievance", authenticate, async (req, res) => {
  try {
    const { name, email, phone, dept, grievance } = req.body;

    if (!name || !email || !phone || !grievance) {
      return res.status(400).json({ error: "Please fill all the details" });
    }
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMsg = await userContact.addGrievance(name, email, phone, dept, grievance);
      await userContact.save();

      const mailOptions = {
        from: 'shriramuchiha66@gmail.com',
        to: email,
        subject: 'Grievance Filed!!',
        text: `${name}, Your grievance has been successfully filed`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.status(200).json({ message: "Grievance Filed Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/grievancelist", async (req, res) => {
  try {
    const grievanceList = await User.find({ grievances: { "$not": { "$size": 0 } } }, { grievances: 1 });
    tempList = grievanceList;

    if (!grievanceList) {
      return res.status(400).send();
    } else {
      res.status(200).send(grievanceList);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/education", async (req, res) => {
  try {
    const grievanceList = await User.find({ grievances: { "$not": { "$size": 0 } } }, { grievances: 1 });
    tempList = grievanceList;

    if (!grievanceList) {
      return res.status(400).send();
    } else {
      res.status(200).send(grievanceList);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/users/:name", async (req, res) => {
  try {
    const myname = req.params.name;
    const userData = await User.find({ name: myname });

    if (!userData) {
      return res.status(400).send();
    } else {
      res.status(200).send(userData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUsers = await User.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).send(updateUsers);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/aAbBcC/updatedocs", async (req, res) => {
  try {
    const { email, dept, _id, gId, status, feedback } = req.body;

    if (!email || !dept || !_id || !gId || !status || !feedback) {
      return res.status(400).json({ message: "Please send data" });
    }

    const doc = await User.updateOne({ _id },
      { $set: { 'grievances.$[g].status': status, 'grievances.$[g].feedback': feedback } },
      { arrayFilters: [{ 'g._id': gId }] });

    const mailOptions = {
      from: 'shriramuchiha66@gmail.com',
      to: email,
      subject: 'An update found',
      text: `Hello, ${dept} Criteria had an update on your grievance number ${gId} and 
        the status has been updated to ${status}. Find the feedback associated with your grievance:
        ${feedback}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return res.status(200).json({ message: "Message updated" });
  } catch (err) {
    return res.status(400).json({ error: "Could not update" });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie('jwtoken', { path: "/" });
  res.status(200).send("Logout Successful");
});

module.exports = router;
