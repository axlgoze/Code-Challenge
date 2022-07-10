const Reader = require("./../../models/utils/Reader");
class StudentService{
	static getStudents(students){
		const studentsAmount = students.length;
		const allStudents = students;
		console.log(studentsAmount);
//		return studentsAmount;
		return allStudents;
	}
}

module.exports = StudentService;
