const Reader = require("./../../models/utils/Reader");
class StudentService{
	static getStudents(students){
		const studentsAmount = students.length;
		console.log(studentsAmount);
		return studentsAmount;
	}
}

module.exports = StudentService;
