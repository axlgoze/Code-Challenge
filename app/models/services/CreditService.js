const Reader = require("./../utils/Reader");
const StudentService = require("./../services/studentService");
class CreditService{
	static getStudentsByCredits(students){
		const studentByCredits=students.filter((student)=> student.credits >= 500);
//		if(student.credits >=500){
			return studentByCredits;
//		}
	}

}

module.exports = CreditService;
