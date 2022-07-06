const StudentService=require("./../services/studentService");
const CertificationService=require("./../services/CertificationService");

class StudentController{
	static getStudentsByController(students){
		const studentsInfo = StudentService.getStudents(students);
		return studentsInfo;
	}

	static getStudentswCertification(students){
		const studentswC = CertificationService.haveCertification(students);
		return studentswC;
	}

}

module.exports=StudentController;
