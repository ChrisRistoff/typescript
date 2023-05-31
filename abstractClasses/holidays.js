"use strict";
class Department {
    // protected constructor because we don't want to instantiate this class directly
    // but we want to instantiate the child classes of this class
    // protected constructor is similar to private constructor
    // but it allows the child classes to instantiate this class
    constructor(name) {
        this.name = name;
    }
    addHoliday(holidays) {
        // if holidays is an array
        if (Array.isArray(holidays)) {
            // add each holiday to the holidays array
            holidays.forEach((holiday) => {
                this.holidays.push(holiday);
            });
        }
    }
    getHolidays() {
        if (this.holidays.length > 0) {
            return this.holidays;
        }
        return '{ No holidays }';
    }
    printHolidays() {
        if (this.holidays.length > 0) {
            this.holidays.forEach((holiday) => {
                console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
            });
        }
        else {
            console.log('{ No holidays }');
        }
    }
}
class ITDepartment extends Department {
    constructor() {
        super('IT');
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length > 0) {
            console.log(`${this.name} Department holidays:`);
            this.holidays.forEach((holiday) => {
                console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
            });
        }
        else {
            console.log(`${this.name} Department holidays:`);
            console.log('{ No holidays }');
        }
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting');
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length > 0) {
            console.log(`${this.name} Department holidays:`);
            this.holidays.forEach((holiday) => {
                console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
            });
        }
        else {
            console.log('{ No holidays }');
        }
    }
}
class HrDepartment extends Department {
    constructor() {
        super('HR');
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length > 0) {
            console.log(`${this.name} Department holidays:`);
            this.holidays.forEach((holiday) => {
                console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
            });
        }
        else {
            console.log('{ No holidays }');
        }
    }
}
const itDepartment = new ITDepartment();
const accountingDepartment = new AccountingDepartment();
const HRDepartment = new HrDepartment();
const sharedHolidays = [
    {
        date: new Date('2023-01-01'),
        reason: 'New Year',
    },
    {
        date: new Date('2023-01-26'),
        reason: 'Republic Day',
    },
];
// itDepartment.addHoliday(sharedHolidays);
accountingDepartment.addHoliday(sharedHolidays);
HRDepartment.addHoliday(sharedHolidays);
// itDepartment.addHoliday([{ date: new Date('2023-10-02'), reason: 'IT day' }]);
accountingDepartment.addHoliday([{ date: new Date('2023-10-02'), reason: 'accounting day' }]);
HRDepartment.addHoliday([{ date: new Date('2023-10-02'), reason: 'HR day' }]);
// console.log(itDepartment.getHolidays());
// console.log(accountingDepartment.getHolidays());
// console.log(HRDepartment.getHolidays());
itDepartment.printHolidays();
accountingDepartment.printHolidays();
HRDepartment.printHolidays();
