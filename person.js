// 10. person clas
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

let person1 = new Person("Emma", 30);
person1.introduce();
// // Hi, I'm Emma and I'm 30 years old.
let person2 = new Person("Liam", 25);
person2.introduce();
// // Hi, I'm Liam and I'm 25 years old.