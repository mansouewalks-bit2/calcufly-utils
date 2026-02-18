export interface BMIResult {
  bmi: number;
  category: string;
}

export interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export interface CompoundInterestResult {
  amount: number;
  interest: number;
}

export interface TipCalculatorResult {
  tipAmount: number;
  totalAmount: number;
  perPerson: number;
}

export function compoundInterest(principal: number, rate: number, time: number, frequency?: number): CompoundInterestResult;
export function mortgagePayment(principal: number, rate: number, years: number): MortgageResult;
export function loanPayment(principal: number, rate: number, months: number): MortgageResult;
export function bmi(weight: number, height: number): BMIResult;
export function bmr(weight: number, height: number, age: number, gender: string): number;
export function convertTemperature(value: number, from?: string, to?: string): number;
export function convertLength(value: number, from?: string, to?: string): number;
export function convertWeight(value: number, from?: string, to?: string): number;
export function percentage(value: number, percent: number): number;
export function percentageChange(oldValue: number, newValue: number): number;
export function tipCalculator(amount: number, tipPercent: number, people?: number): TipCalculatorResult;
export function area(shape: string, dimensions: Record<string, number>): number;
