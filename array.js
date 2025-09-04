const students = [
    { name: "first guy", marks: 84 },
    { name: "second guy", marks: 92 },
    { name: "third guy", marks: 67 },
    { name: "fourth guy", marks: 45 },
]
function calculateAverageMarks(students) {
    let total = 0;
    for (let student of students) {
        total += student.marks;
    }
    return total / students.length;
}
console.log("Average Marks:", calculateAverageMarks(students));



const findTopStudent = (students) => {
    return students.reduce((top, current) => current.marks > top.marks ? current : top, students[0]);

};


console.log("Top Student:", findTopStudent(students).name, "-", findTopStudent(students).marks);