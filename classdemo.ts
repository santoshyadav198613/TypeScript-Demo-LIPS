class Employee implements IEmployee {
    firstName: string;
    lastName: string;
    age: number;
    dob: Date;
    address: IAddress;
    
    constructor(private calc: CalculatorService, firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName(): string {
        return this.firstName;
    }

    Add() {
        this.calc.add(2);
    }

    Edit() {
        this.calc.sub(2, 4);
    }

    Delete() {

    }
}

let empl = new Employee('test', 'test2');

empl.age = 10;
// empl.address.addressLine1 = 'pune';
// empl.address.addressLine2 = 'pune';

empl.dob = new Date('10-Nov-2013');

console.log(empl);


interface IEmployee {
    Add();
    Edit();
    Delete();
}

interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    zip: number;
}



class CalculatorService {
    add(num1: number, num2?: number) {
        return num1 + num2;
    }

    sub(num1: number, num2: number) {
        return num1 - num2;
    }

    mul(num1: number, num2: number) {
        return num1 * num2;
    }

}