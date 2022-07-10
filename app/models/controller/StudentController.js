const StudentService=require("./../services/studentService");
const CertificationService=require("./../services/CertificationService");
const CreditService=require("./../services/CreditService");
const Reader = require("./../utils/Reader");

class StudentController{
	static getStudentsByController(){
		const students=Reader.readJsonFile("students.json");
		const studentsInfo = StudentService.getStudents(students);
		return studentsInfo;
	}

	static getStudentswCertification(){
		const students=Reader.readJsonFile("students.json");
		const studentswC = CertificationService.haveCertification(students);
		return studentswC;
	}

	static getStudentsByCreditsController(){
		const students=Reader.readJsonFile("students.json");
		const studentsCredits = CreditService.getStudentsByCredits(students);
		return studentsCredits;
	}

}

module.exports=StudentController;
