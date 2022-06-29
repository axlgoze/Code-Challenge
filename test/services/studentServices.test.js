const Reader=require("./../../app/models/utils/Reader");
describe("Test Suite for student services", () =>{
	test('0) Read json file',()=>{
		const students = Reader.readJsonFile("students.json");
		expect(students).toBeDefined();
	});
	test("1) Get all students information", ()=>{
		const students = Reader.readJsonFile("students.json");
		const studentsAmount = students.length;
		expect(studentsAmount).toBe(51);
	});
});
