class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    introduce() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}
class student extends person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}
const student1 = new student('Rahul', 13, 9);
student1.introduce();
student1.study();
