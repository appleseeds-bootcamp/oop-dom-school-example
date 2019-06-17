let school = new School();


let addTeacherBtn = document.getElementById("add-teacher");
addTeacherBtn.addEventListener("click", function(e) {
    let teacherName = document.getElementById("teacher-name").value;
    let maxStudents = document.getElementById("max-students").value;

    let teacher = new Teacher(teacherName, parseInt(maxStudents))

    school.addTeacher(teacher);

});

document.getElementById("print-school").addEventListener("click", function(e) {
    let teachersList = document.getElementById("teacher-list");
    teachersList.innerHTML="";
    school.teachers.forEach(element => {
        let newTeacherItem = document.createElement("li");
        newTeacherItem.innerHTML = `Name: ${element.name}, Max Students: ${element.maxStudents}`;
        teachersList.appendChild(newTeacherItem);
    });
});