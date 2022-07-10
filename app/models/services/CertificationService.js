const Reader = require("./../utils/Reader");
const StudentService = require("./../services/studentService");

class CertificationService{

static haveCertification(students){
	const studentWithCertification = students.filter((student)=> student.haveCertification === true);
	const studentswC= studentWithCertification;
//	return studentWithCertification.length;
	return studentswC;
}

}

module.exports = CertificationService;
