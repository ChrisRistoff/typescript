type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  constructor(
    protected name: string,
  ) {}
}

class ITDepartment extends Department {
  protected holidays: Holidays = [
    {
      date: new Date('2021-01-01'),
      reason: 'New Year',
    },
    {
      date: new Date('2021-01-26'),
      reason: 'Republic Day',
    },
  ];
  constructor() {
    super('IT');
  }
}

class AccountingDepartment extends Department {
  protected holidays: Holidays = [
    {
      date: new Date('2021-01-01'),
      reason: 'New Year',
    },
    {
      date: new Date('2021-01-26'),
      reason: 'Republic Day',
    },
  ];
  constructor() {
    super('Accounting');
  }
}

const itDepartment = new ITDepartment();
const accountingDepartment = new AccountingDepartment();


console.log(itDepartment);
console.log(accountingDepartment);
