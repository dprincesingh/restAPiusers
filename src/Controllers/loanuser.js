import LoanUser from "../Models/loanuser.js";

 async function handlegetAllusers(req, resp) {
  try {
    const result = await LoanUser.find({});
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
}
 async function handlegetusersbyId(req, resp) {
  try {
    const result = await LoanUser.findById(req.params.id);
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
}
 async function handleCreateUser(req, resp) {
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
    const result = await LoanUser.create(newuser);

    resp.status(201).send("User created successfully " + result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
}
 async function handleDeletusersbyId(req, resp) {
  try {
    const result = await LoanUser.findByIdAndDelete(req.params.id);
    resp.send({Succes:true,
    result});
  } catch (error) {
    resp.status(500).send(error.message);
  }
}
 async function handleUpdateusersbyId(req, resp) {
  try {
    const result = await LoanUser.findByIdAndUpdate(req.params.id);
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
}

export  {
  handlegetAllusers,
  handlegetusersbyId,
  handleCreateUser,
  handleDeletusersbyId,
  handleUpdateusersbyId,
};
