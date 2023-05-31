"use strict";
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
}
const itDepartment = new ITDepartment();
const accountingDepartment = new AccountingDepartment();
console.log(itDepartment);
console.log(accountingDepartment);
