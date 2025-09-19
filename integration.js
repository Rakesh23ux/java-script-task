class student {
    #fees;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.#fees = 0;
    }
    setFees(amount) {
        this.#fees = amount;
    }
    getfees() {
        return this.#fees;
    }
    #calculateFees() {
        return this.#fees + 1000;
    }
    calculateTotalFees() {
        return this.#calculateFees();
    }
    getdetails() {
        console.log(`hello my name is ${this.name} and my age is ${this.age} and my course is ${this.course} and my fees is ${this.#fees}`);
    }
}

class schoolstudent extends student {
    constructor(name, age, course,) {
        super(name, age, course);

    }
    getdetails() {
        console.log(`hello my name is ${this.name} and my age is ${this.age} and my course is ${this.course} `);
    }
}

class colleagestudent extends student {
    constructor(name, age, course,) {
        super(name, age, course);
    }
    getdetails() {
        console.log(`hello my name is ${this.name} and my age is ${this.age} and my course is ${this.course}`);
    }
}
let s1=new student("arya",21,"maths");
let s2=new student("ajay",22,"science");

s1.setFees(5000);
s2.setFees(6000);
console.log(s1.getdetails());
console.log(s2.getdetails());
console.log(s1.calculateTotalFees());
console.log(s2.calculateTotalFees());