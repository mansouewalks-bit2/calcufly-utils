# calcufly-utils

Lightweight calculator utility functions for finance, health, math, and conversions. Zero dependencies.

Used by [CalcuFly.com](https://calcufly.com) — 600+ free online calculators in 26 languages.

## Installation

```bash
npm install calcufly-utils
```

## Usage

```javascript
const calc = require('calcufly-utils');

// Finance
const loan = calc.mortgage(300000, 6.5, 30);
console.log(loan.monthly); // $1,896.20

const growth = calc.compoundInterest(10000, 7, 10);
console.log(growth.finalAmount); // $20,096.61

// Health
const body = calc.bmi(75, 175);
console.log(body.bmi); // 24.49
console.log(body.category); // "Normal"

const calories = calc.bmr(75, 175, 30, 'male');
console.log(calories); // 1,728.75

// Conversions
console.log(calc.convert(100, 'kmToMiles')); // 62.14
console.log(calc.convert(72, 'fahrenheitToCelsius')); // 22.22

// Math
console.log(calc.percentage(25, 200)); // 12.5
console.log(calc.percentageChange(100, 150)); // 50

// Construction
const slab = calc.concrete(20, 10, 4);
console.log(slab.cubicYards); // 2.47
```

## API Reference

### Finance

| Function | Description |
|----------|-------------|
| `mortgage(principal, rate, years)` | Monthly mortgage payment, total paid, total interest |
| `compoundInterest(principal, rate, years, compounds?)` | Final amount and total interest earned |
| `amortization(principal, rate, years)` | Full amortization schedule |
| `roi(gain, cost)` | Return on investment percentage |
| `tip(bill, tipPercent, splitWays?)` | Tip amount, total, per person |

### Health

| Function | Description |
|----------|-------------|
| `bmi(weightKg, heightCm)` | BMI value and category |
| `bmr(weightKg, heightCm, age, gender)` | Basal Metabolic Rate |
| `tdee(bmrValue, activity)` | Total Daily Energy Expenditure |
| `idealWeight(heightCm, gender)` | Ideal weight (4 formulas) |

### Math

| Function | Description |
|----------|-------------|
| `percentage(value, total)` | Calculate percentage |
| `percentageChange(old, new)` | Percentage change |
| `gcd(a, b)` | Greatest Common Divisor |
| `lcm(a, b)` | Least Common Multiple |

### Conversions

```javascript
calc.convert(value, 'kmToMiles')
```

Available: `kmToMiles`, `milesToKm`, `cmToInches`, `inchesToCm`, `feetToMeters`, `metersToFeet`, `kgToLbs`, `lbsToKg`, `ozToGrams`, `gramsToOz`, `celsiusToFahrenheit`, `fahrenheitToCelsius`, `celsiusToKelvin`, `kelvinToCelsius`, `litersToGallons`, `gallonsToLiters`, `mlToFlOz`, `flOzToMl`, `kphToMph`, `mphToKph`, `sqftToSqm`, `sqmToSqft`, `acresToHectares`, `hectaresToAcres`

### Construction

| Function | Description |
|----------|-------------|
| `concrete(lengthFt, widthFt, depthIn)` | Concrete needed (yards, feet, bags) |
| `paint(areaSqft, coats?, coverage?)` | Paint gallons needed |

## License

MIT - [CalcuFly.com](https://calcufly.com)
