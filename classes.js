class SchoolPerson {
    constructor(name, subjects) {
        this.name = name;
        this.subjects = subjects || [];
    }
    addSubject(subject) {
        if (this.subjects.indexOf(subject) === -1) {
            this.subjects.push(subject);
        }
    }
}

class Teacher extends SchoolPerson {
    constructor(name, maxStudents, subjects) {
        super(name, subjects);
        this.maxStudents = maxStudents || 5;
        this.students = [];
    }
    canTeach(student) {
        return this.students.length < this.maxStudents && this.subjects.includes(student.subjects[0]);
    }
}
class Student extends SchoolPerson {
    constructor(name, subjects) {
        super(name, subjects);
    }
}

class School {
    constructor() {
        this.teachers = [];
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    assignStudent(student) {
        for (let i = 0; i < this.teachers.length; i++) {
            let teacher = this.teachers[i];
            if (teacher.canTeach(student)) {
                teacher.students.push(student);
            }
        }
    }
}