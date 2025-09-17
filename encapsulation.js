class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}



class Student extends Person {
    #marks; // private field
    constructor(name, age, grade, marks) {
        super(name, age);
        this.grade = grade;
        this.#marks = marks;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade} here are his marks: ${this.#marks}`);
    }
    getMarks() {
        return this.#marks;
    }
    setMarks(newmarks) {
        this.#marks = newmarks;
    }
}



const student1 = new Student('Rahul', 13, 9, 85);
student1.introduce();
student1.study();
console.log(student1.getMarks()); // Output: 85
student1.setMarks(95);
console.log(student1.getMarks()); // Output: 95
