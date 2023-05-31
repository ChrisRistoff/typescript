type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;

  // protected constructor because we don't want to instantiate this class directly
  // but we want to instantiate the child classes of this class
  // protected constructor is similar to private constructor
  // but it allows the child classes to instantiate this class
  protected constructor(
    protected name: string,
  ) {}

  public addHoliday(holidays: Holidays) {

    // if holidays is an array
    if (Array.isArray(holidays)) {
      // add each holiday to the holidays array
      holidays.forEach((holiday) => {
        this.holidays.push(holiday);
      });
    }
  }

  public getHolidays() {
    if (this.holidays.length > 0) {
      return this.holidays;
    }
    return '{ No holidays }';
  }

  // abstract method
  // abstract method is a method that is declared in the parent class
  // but it is implemented in the child class
  public abstract printHolidays(): void;
  
}

class ITDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('IT');
  }

  printHolidays() {
    if (this.holidays.length > 0) {
      console.log(`${this.name} Department holidays:`);
      this.holidays.forEach((holiday) => {
        console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
      });
    } else {
      console.log(`${this.name} Department holidays:`);
      console.log('{ No holidays }');
 }}}

class AccountingDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('Accounting');
  }
  printHolidays() {
    if (this.holidays.length > 0) {
      console.log(`${this.name} Department holidays:`);
      this.holidays.forEach((holiday) => {
        console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
      });
    } else {
      console.log('{ No holidays }');
}}}

class HrDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('HR');
  }
  printHolidays() {
    if (this.holidays.length > 0) {
      console.log(`${this.name} Department holidays:`);
      this.holidays.forEach((holiday) => {
        console.log(`${holiday.date.toDateString()} - ${holiday.reason}`);
      });
    } else {
      console.log('{ No holidays }');
}}}

const itDepartment: ITDepartment = new ITDepartment();
const accountingDepartment: AccountingDepartment = new AccountingDepartment();
const HRDepartment: HrDepartment = new HrDepartment();

const sharedHolidays: Holidays = [
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
