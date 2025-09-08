let passingMarks = 50;

function gradeStudents(students) {

    const studentsUpper = students.map(student => ({
        name: student.name.toUpperCase(),
        marks: student.marks
    }));


    const passedStudents = studentsUpper.filter(student => student.marks >= passingMarks);


    passedStudents.forEach(student => {

        let grade;
        if (student.marks >= 90) grade = 'A';
        else if (student.marks >= 80) grade = 'B';
        else if (student.marks >= 70) grade = 'C';
        else if (student.marks >= 60) grade = 'D';
        else grade = 'E';


        const firstThree = student.name.slice(0, 3);
        const includesA = student.name.includes('A');


        console.log(
            `Name: ${student.name}, Marks: ${student.marks}, Grade: ${grade}, First 3 Letters: ${firstThree}, Includes "A": ${includesA}`
        );
    });
}


const studentArray = [
    { name: 'arun', marks: 75 },
    { name: 'Kiran', marks: 45 },
    { name: 'Suma', marks: 88 },
    { name: 'Vikas', marks: 53 },
    { name: 'Meena', marks: 96 }
];

gradeStudents(studentArray);
