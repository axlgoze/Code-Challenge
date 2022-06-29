const Reader=require("./../../app/models/utils/Reader");
const StudentService=require("./../../app/models/services/StudentService")
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
});
