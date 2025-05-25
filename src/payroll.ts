export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
 
const deductions: Deductions = new Map();
const gross = salary.gross;
const yearsalary = salary.gross * 12;


const birthyear = salary.born.getFullYear();

// 1.Januar nach 17.Geb
const deductionStart = new Date(salary.born.getFullYear() + 18, 0, 1)
const Over17 = salary.payday >= deductionStart;


const applyDeductions = (key: string, condition: boolean) => {
if (condition){
const rates = DEDUCTION_RATES.get(key) / 100;
const amount = gross * rates;
deductions.set(key, amount) 



}
};
applyDeductions("AHV", Over17);
applyDeductions("IV", Over17);
applyDeductions("EO", Over17);


applyDeductions("ALV", yearsalary >= 2500);
applyDeductions("NBU", yearsalary >= 2500);


applyDeductions("PK", yearsalary >= 22680);
}

let totalDeductions = 0;
for (const amount of deduction.values())
{
totalDeductions += amount;
}
const netto = gross - totalDeductions;
}

  };
  return result;
  salary,
  deductions, 
  totalDeductions,
  netto,
};
