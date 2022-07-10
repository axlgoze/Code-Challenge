const StudentController= require("./controller/StudentController");
const express = require ("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request,response)=>{
	response.json({message: "Code challenge API server!"});
});

app.get("/students/info", (request,response)=>{
	const studentsInfo = StudentController.getStudentsByController();
	response.json(studentsInfo);
});

app.get("/students/info/emails", (request,response)=>{
	const studentsInfoEmails = StudentController.getStudentswCertification();
	response.json(studentsInfoEmails);
});

app.listen(port, () =>{
	console.log(`Code challenge API in localhost:${port}`);
});

