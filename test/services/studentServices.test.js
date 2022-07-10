const Reader=require("./../../app/models/utils/Reader");
const StudentService=require("./../../app/models/services/studentService");
const CertificationService=require("./../../app/models/services/CertificationService");
const CreditService=require("./../../app/models/services/CreditService");
describe("Test Suite for student services", () =>{
	test('0) Read json file',()=>{
		const students = Reader.readJsonFile("students.json");
		expect(students).toBeDefined();
	});
	test("1) Get all students information", ()=>{
		const students = Reader.readJsonFile("students.json");
		const studentsAmount = StudentService.getStudents(students);
		const allStudentsInfo = StudentService.getStudents(students);
		expect(allStudentsInfo).toBeDefined();
	});
	test("2) get email from students with certificacion", ()=>{
		const students = Reader.readJsonFile("students.json");
		const StudentsEmailsWithCertification = CertificationService.haveCertification(students);
		expect(StudentsEmailsWithCertification).toBeDefined();
	});
	test("3) get students with credits > 500", ()=>{
		const students = Reader.readJsonFile("students.json");
		const StudentsWithCredits = CreditService.getStudentsByCredits(students);
		expect(StudentsWithCredits).toBeDefined();
	});

});
