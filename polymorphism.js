class student {
    constructor() {
    }
    getrole() {
        console.log(" play school student ");
    }
}

class primarystudent extends student {
    constructor() {
    }
    getrole() {
        console.log(" primary school student ");
    }
}

class colleagestudent extends student {
    constructor() {
    }
    getrole() {
        console.log("colleage student ");
    }
}
const students = [new primarystudent("John"), new colleagestudent("Jane")];
students.forEach(student => { student.getrole(); });

