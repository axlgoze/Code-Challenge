const Reader=require("./../../app/models/utils/Reader");
const StudentService=require("./../../app/models/services/studentService");
const CertificationService=require("./../../app/models/services/CertificationService");
describe("Test Suite for student services", () =>{
	test('0) Read json file',()=>{
		const students = Reader.readJsonFile("students.json");
		expect(students).toBeDefined();
	});
	test("1) Get all students information", ()=>{
		const students = Reader.readJsonFile("students.json");
		const studentsAmount = StudentService.getStudents(students);
		expect(studentsAmount).toBe(51);
	});
	test("2) get email from students with certificacion", ()=>{
		const students = Reader.readJsonFile("students.json");
		const StudentsEmailsWithCertification = CertificationService.haveCertification(students);
		expect(StudentsEmailsWithCertification).toBe(29);
	});

});
