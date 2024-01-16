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
    try {
      const body = req.body;
      const result = await loanuser.create({
        name: body.name,
        contactno: body.contactno,
        emailid: body.email,
        salaryaccount: body.salaryaccount,
        monthlysalary: body.monthlysalary,
        companyname: body.companyname,
      });

      console.log("User created:", result);
      resp.status(201).send("User created successfully");
    } catch (error) {
      console.error(error);
      resp.status(500).send(error.message);
    }
  });

export default router;
