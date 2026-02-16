/**
 * CalcuFly Utils - Calculator utility functions
 * https://calcufly.com
 *
 * Lightweight calculator functions for finance, health, math, and conversions.
 * No dependencies. Works in Node.js and browsers.
 */

// ============== FINANCE ==============

/**
 * Calculate monthly mortgage payment
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (e.g., 5.5 for 5.5%)
 * @param {number} years - Loan term in years
 * @returns {{ monthly: number, totalPaid: number, totalInterest: number }}
 */
function mortgage(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) {
    const monthly = principal / n;
    return { monthly, totalPaid: principal, totalInterest: 0 };
  }
  const monthly = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPaid = monthly * n;
  return { monthly, totalPaid, totalInterest: totalPaid - principal };
}

/**
 * Calculate compound interest
 * @param {number} principal - Initial investment
 * @param {number} annualRate - Annual interest rate (%)
 * @param {number} years - Number of years
 * @param {number} [compoundsPerYear=12] - Compounding frequency
 * @returns {{ finalAmount: number, totalInterest: number }}
 */
function compoundInterest(principal, annualRate, years, compoundsPerYear = 12) {
  const r = annualRate / 100;
  const finalAmount = principal * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * years);
  return { finalAmount, totalInterest: finalAmount - principal };
}

/**
 * Calculate loan amortization schedule
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (%)
 * @param {number} years - Loan term in years
 * @returns {Array<{ month: number, payment: number, principal: number, interest: number, balance: number }>}
 */
function amortization(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const payment = r === 0 ? principal / n : principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const schedule = [];
  let balance = principal;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const princ = payment - interest;
    balance -= princ;
    schedule.push({ month: i, payment, principal: princ, interest, balance: Math.max(0, balance) });
  }
  return schedule;
}

/**
 * Calculate ROI (Return on Investment)
 * @param {number} gain - Net profit
 * @param {number} cost - Investment cost
 * @returns {number} ROI percentage
 */
function roi(gain, cost) {
  return (gain / cost) * 100;
}

/**
 * Calculate tip amount and total
 * @param {number} billAmount - Bill total
 * @param {number} tipPercent - Tip percentage
 * @param {number} [splitWays=1] - Number of people splitting
 * @returns {{ tip: number, total: number, perPerson: number }}
 */
function tip(billAmount, tipPercent, splitWays = 1) {
  const tipAmount = billAmount * (tipPercent / 100);
  const total = billAmount + tipAmount;
  return { tip: tipAmount, total, perPerson: total / splitWays };
}

// ============== HEALTH ==============

/**
 * Calculate BMI (Body Mass Index)
 * @param {number} weightKg - Weight in kilograms
 * @param {number} heightCm - Height in centimeters
 * @returns {{ bmi: number, category: string }}
 */
function bmi(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const value = weightKg / (heightM * heightM);
  let category = 'Normal';
  if (value < 18.5) category = 'Underweight';
  else if (value < 25) category = 'Normal';
  else if (value < 30) category = 'Overweight';
  else category = 'Obese';
  return { bmi: value, category };
}

/**
 * Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor
 * @param {number} weightKg - Weight in kg
 * @param {number} heightCm - Height in cm
 * @param {number} age - Age in years
 * @param {'male'|'female'} gender
 * @returns {number} BMR in calories/day
 */
function bmr(weightKg, heightCm, age, gender) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === 'male' ? base + 5 : base - 161;
}

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * @param {number} bmrValue - BMR calories
 * @param {'sedentary'|'light'|'moderate'|'active'|'very_active'} activity
 * @returns {number} TDEE in calories/day
 */
function tdee(bmrValue, activity) {
  const multipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9 };
  return bmrValue * (multipliers[activity] || 1.55);
}

/**
 * Calculate ideal weight range (multiple formulas)
 * @param {number} heightCm - Height in cm
 * @param {'male'|'female'} gender
 * @returns {{ devine: number, robinson: number, miller: number, hamwi: number }}
 */
function idealWeight(heightCm, gender) {
  const inchesOver5ft = (heightCm - 152.4) / 2.54;
  if (gender === 'male') {
    return {
      devine: 50 + 2.3 * inchesOver5ft,
      robinson: 52 + 1.9 * inchesOver5ft,
      miller: 56.2 + 1.41 * inchesOver5ft,
      hamwi: 48 + 2.7 * inchesOver5ft
    };
  }
  return {
    devine: 45.5 + 2.3 * inchesOver5ft,
    robinson: 49 + 1.7 * inchesOver5ft,
    miller: 53.1 + 1.36 * inchesOver5ft,
    hamwi: 45.5 + 2.2 * inchesOver5ft
  };
}

// ============== MATH ==============

/**
 * Calculate percentage
 * @param {number} value - The value
 * @param {number} total - The total
 * @returns {number} Percentage
 */
function percentage(value, total) {
  return (value / total) * 100;
}

/**
 * Calculate percentage change
 * @param {number} oldValue
 * @param {number} newValue
 * @returns {number} Percentage change
 */
function percentageChange(oldValue, newValue) {
  return ((newValue - oldValue) / oldValue) * 100;
}

/**
 * Greatest Common Divisor
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

/**
 * Least Common Multiple
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// ============== CONVERSIONS ==============

const conversions = {
  // Length
  kmToMiles: v => v * 0.621371,
  milesToKm: v => v * 1.60934,
  cmToInches: v => v * 0.393701,
  inchesToCm: v => v * 2.54,
  feetToMeters: v => v * 0.3048,
  metersToFeet: v => v * 3.28084,
  // Weight
  kgToLbs: v => v * 2.20462,
  lbsToKg: v => v * 0.453592,
  ozToGrams: v => v * 28.3495,
  gramsToOz: v => v * 0.035274,
  // Temperature
  celsiusToFahrenheit: v => v * 9 / 5 + 32,
  fahrenheitToCelsius: v => (v - 32) * 5 / 9,
  celsiusToKelvin: v => v + 273.15,
  kelvinToCelsius: v => v - 273.15,
  // Volume
  litersToGallons: v => v * 0.264172,
  gallonsToLiters: v => v * 3.78541,
  mlToFlOz: v => v * 0.033814,
  flOzToMl: v => v / 0.033814,
  // Speed
  kphToMph: v => v * 0.621371,
  mphToKph: v => v * 1.60934,
  // Area
  sqftToSqm: v => v * 0.092903,
  sqmToSqft: v => v / 0.092903,
  acresToHectares: v => v * 0.404686,
  hectaresToAcres: v => v / 0.404686,
};

/**
 * Convert between units
 * @param {number} value - Value to convert
 * @param {string} conversion - Conversion name (e.g., 'kmToMiles')
 * @returns {number} Converted value
 */
function convert(value, conversion) {
  const fn = conversions[conversion];
  if (!fn) throw new Error(`Unknown conversion: ${conversion}. Available: ${Object.keys(conversions).join(', ')}`);
  return fn(value);
}

// ============== CONSTRUCTION ==============

/**
 * Calculate concrete needed
 * @param {number} lengthFt - Length in feet
 * @param {number} widthFt - Width in feet
 * @param {number} depthInches - Depth in inches
 * @returns {{ cubicYards: number, cubicFeet: number, bags60lb: number, bags80lb: number }}
 */
function concrete(lengthFt, widthFt, depthInches) {
  const cubicFeet = lengthFt * widthFt * (depthInches / 12);
  const cubicYards = cubicFeet / 27;
  return {
    cubicYards,
    cubicFeet,
    bags60lb: Math.ceil(cubicFeet * 2.2),
    bags80lb: Math.ceil(cubicFeet * 1.65)
  };
}

/**
 * Calculate paint needed
 * @param {number} areaSqft - Area in square feet
 * @param {number} [coats=2] - Number of coats
 * @param {number} [coverageSqftPerGallon=350] - Coverage per gallon
 * @returns {{ gallons: number }}
 */
function paint(areaSqft, coats = 2, coverageSqftPerGallon = 350) {
  return { gallons: Math.ceil((areaSqft * coats) / coverageSqftPerGallon) };
}

// ============== EXPORTS ==============

module.exports = {
  // Finance
  mortgage, compoundInterest, amortization, roi, tip,
  // Health
  bmi, bmr, tdee, idealWeight,
  // Math
  percentage, percentageChange, gcd, lcm,
  // Conversions
  convert, conversions,
  // Construction
  concrete, paint,
};
