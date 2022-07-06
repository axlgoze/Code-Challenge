const studentController= require("./../controller/studentController");
const express = require ("express");
const app = express();
app.use(express.json(());
const port 3000;

app.get("/", (request,response)=>{
	response.json({message: "Code challenge API server!"});
});

app.listen(port, () =>{
	console.log(`Code challenge API in localhost:${port}`);
});
