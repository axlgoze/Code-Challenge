const Reader = require("./../../app/models/utils/Reader");
const StudentService = require("./../../app/models/services/studentService");
const StudentController = require("./../../app/models/controller/StudentController");

describe("Test suite for student controller", ()=>{
	test("0) Read json file for controller", ()=>{
	const students = Reader.readJsonFile("students.json");
	expect(students).toBeDefined();
	});
	test("1) get all info of students from studentService", ()=>{
	const students = Reader.readJsonFile("students.json");
	const studentsAllInfo = StudentService.getStudents(students);
	expect(studentsAllInfo).toBeDefined();
	});
	test("2) get all info of students from controller", ()=>{
	const students = Reader.readJsonFile("students.json");
	const studentsAllInfo = StudentController.getStudentsByController(students);
	expect(studentsAllInfo).toBeDefined();
	});
	test("3) get students with Certification", ()=>{
	const students = Reader.readJsonFile("students.json");
	const studentswc = StudentController.getStudentswCertification(students);
	expect(studentswc).toBeDefined();
	});

})
