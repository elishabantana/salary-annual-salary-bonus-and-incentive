import Employee from "./employee.mjs";
import Manager from "./manager.mjs";

export default class Developer extends Employee {
    constructor(name, age, salary, ...programmingLanguages) {
        super(name, age, salary);
        this.programmingLanguages = programmingLanguages;
        this.incentive = 2000;

    }
    get getProgrammingLanguages() {
        return this.programmingLanguages;
    }
    calculateAnnualSalaryWithIncentive() {

        return (this.salary * 12) + this.incentive;
    }
}


function main() {

    let myEmployee = new Employee("ELISHA BANTANA", 30, 1000);
    console.log("details of Employee", myEmployee.getDetails);  //details of Employee
    console.log("annual salary of employee", myEmployee.calculateAnnualSalary());  //annual salary of Employee
    console.log();

    let myManager = new Manager("JOHN DOE", 27, 1200, "Accounting");
    console.log("details of Manager", myManager.getDetails);  //details of Manager
    console.log("annual salary of Manager", myManager.calculateAnnualSalary()); //annual salary of Manager
    console.log("department of Manager", myManager.getDepartment); //department of Manager
    console.log("annual salary with bonus of Manager", myManager.calculateAnnualSalaryWithBonus()); //annual salary with bonus of Manager
    console.log();

    let myDeveloper = new Developer("KIM WUU", 20, 1500, "Java", "Javascript", "HTML", "CSS");
    console.log("details of Developer", myDeveloper.getDetails);  //details of Developer
    console.log("annual salary of Developer", myDeveloper.calculateAnnualSalary());  //annual salary of Developer
    console.log("array of programming languages", myDeveloper.getProgrammingLanguages); //array of programming languages
    console.log("annual salary with incentive of Developer", myDeveloper.calculateAnnualSalaryWithIncentive()); //annual salary with incentive of Developer




}

main()