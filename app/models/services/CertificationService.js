const Reader = require("./../utils/Reader");
const StudentService = require("./../services/studentService");

class CertificationService{

static haveCertification(students){
	const studentWithCertification = students.filter((student)=> student.haveCertification === true);
//	const studientWcAmount= studentWithCertification.lenght;
	return studentWithCertification.length;
}

}

module.exports = CertificationService;
