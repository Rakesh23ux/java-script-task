class student {
    constructor(name, age, gender, phone, email, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.course = course;
        this.marks = marks;
        console.log("Student Details:");
    }
}
const students = new student;
students.phone = "123-456-7890";
students.email = "";
students.course = "Computer Science";
students.marks = 85;
students.phone = "234-567-8901";
students.email = "";
students.course = "Mathematics";
students.marks = 90;
console.log("students phone:" + students.phone);
console.log("students email:" + students.email);
console.log("students course:" + students.course);
console.log("students marks:" + students.marks);
console.log("students phone:" + students.phone);
console.log("students email:" + students.email);
console.log("students course:" + students.course);
console.log("students marks:" + students.marks);
