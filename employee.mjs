export default class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get getDetails() {
        return `name: ${this.name}, age: ${this.age}, salary: ${this.salary}`;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}