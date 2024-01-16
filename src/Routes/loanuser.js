import express from "express";
import loanuser from "../Models/loanuser.js";

const router = express.Router();

router
  .get("/", async (req, resp) => {
    try {
      const result = await loanuser.find({});
      resp.send(result);
    } catch (error) {
      resp.status(500).send(error.message);
    }
  })

  .post("/", async (req, resp) => {
    const body = req.body;
    const newuser = {
      name: body.name,
      contactno: body.contactno,
      emailid: body.email,
      salaryaccount: body.salaryaccount,
      monthlysalary: body.monthlysalary,
      companyname: body.companyname,
    };
    try {
      const result = await loanuser.create(newuser);

      resp.status(201).send("User created successfully " + result);
    } catch (error) {
      resp.status(500).send(error.message);
    }
  });

export default router;
