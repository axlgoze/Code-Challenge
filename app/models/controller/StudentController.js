const StudentService=require("./../services/studentService");

class StudentController{
	static getStudentsByController(students){
		const studentsInfo = StudentService.getStudents(students);
		return studentsInfo;
	}


}

module.exports=StudentController;
