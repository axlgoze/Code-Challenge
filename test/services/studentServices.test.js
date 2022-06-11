const Reader=require("./../../models/utils/Reader");
describe("Test Suite for student services", () =>{
	test('0) Read json file',()=>{
		const students = Reader.readJsonFile("students.json");
		expect(students).toBeDefined();
	});
});
