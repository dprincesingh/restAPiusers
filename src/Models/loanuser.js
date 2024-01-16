import mongoose from "mongoose";

const loanuserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactno: {
        type: Number,
        required: true,
        unique:true
        
    },
    emailid: {
        type: String,
        require: true,
        unique:true
        
        
    },
    salaryaccount: {
        type: String,
        required: true
    },
    monthlysalary: {
        type: Number,
        required: true
    },
    companyname: {
        type: String,
        required: true
    }
});

const LoanUser = mongoose.model("LoanUser", loanuserSchema);


export default LoanUser;
