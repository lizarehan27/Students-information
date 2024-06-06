const express = require("express");
const cors = require("cors"); 
require("./db/conn"); 

const StudentsDetail = require("./models/students"); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cors());

app.post("/registration", async (req, res) => {
    try {
        const addingStudentsDetails = new StudentsDetail(req.body);
        await addingStudentsDetails.save();
        res.status(201).send(addingStudentsDetails); 
    } catch (e) {
        res.status(400).send(e); 
    }
});

// Handle GET request for student registration
app.get("/registration", async (req, res) => {
    try {
       const getregistration = await  StudentsDetail.find({});
        res.send(getregistration); 
    } catch (e) {
        res.status(400).send(e); 
    }
});

// Handle GET request of individual
app.get("/registration/:id", async (req, res) => {
    try {
        const _id = req.params.id;
       const getregistration = await  StudentsDetail.findById({_id});
        res.send(getregistration); 
    } catch (e) {
        res.status(400).send(e); 
    }
});

// Handle PATCH request of RESTFUL API
app.patch("/registration/:id", async (req, res) => {
    try {
        const _id = req.params.id;
       const getregistration = await  StudentsDetail.findByIdAndUpdate(_id,req.body,{
        new:true
       });
        res.send(getregistration); 
    } catch (e) {
        res.status(500).send(e); 
    }
});

// Handle DELETE request of RESTFUL API
app.delete("/registration/:id", async (req, res) => {
    try {
       const getregistration = await  StudentsDetail.findByIdAndDelete(req.params.id);
        res.send(getregistration); 
    } catch (e) {
        res.status(500).send(e); 
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
