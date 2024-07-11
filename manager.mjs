import Employee from "./employee.mjs";

export default class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
        this.bonus = 1200;
    }
    get getDepartment() {
        return this.department;
    }
    calculateAnnualSalaryWithBonus() {
        return (this.salary * 12) + this.bonus;
    }
}
