"use strict";
// abstract classes are used to define the structure of a class
// abstract classes cannot be instantiated directly but can be inherited
// abstract classes can have abstract methods which must be implemented by the child cls
// abstract methods are methods without implementation (no body) 
// and are marked with the abstract keyword in the method signature
class Department {
    constructor(name) {
        this.name = name;
    }
}
class ITDepartment extends Department {
    constructor() {
        super('IT');
        this.holidays = [
            {
                date: new Date('2021-01-01'),
                reason: 'New Year',
            },
            {
                date: new Date('2021-01-26'),
                reason: 'Republic Day',
            },
        ];
    }
    getHolidays() {
        return this.holidays;
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting');
        this.holidays = [
            {
                date: new Date('2021-01-01'),
                reason: 'New Year',
            },
            {
                date: new Date('2021-01-26'),
                reason: 'Republic Day',
            },
        ];
    }
    getHolidays() {
        return this.holidays;
    }
}
const itDepartment = new ITDepartment();
const accountingDepartment = new AccountingDepartment();
console.log(itDepartment);
console.log(accountingDepartment);
console.log(itDepartment.getHolidays());
console.log(accountingDepartment.getHolidays());
