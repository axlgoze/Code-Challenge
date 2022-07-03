const Reader = require("./../../app/models/utils/Reader");
const StudentService = require("./../../app/models/services/studentService");

describe("Test suite for student controller", ()=>{
	test("0) Read json file for controller", ()=>{
	const students = Reader.readJsonFile("students.json");
	expect(students).toBeDefined();
});


})
