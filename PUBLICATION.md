# calcufly-utils NPM Package - Publication Summary

## Status: PUBLISHED

The NPM package `calcufly-utils` has been successfully published and is available on the NPM registry.

## Package Information

- **Package Name**: calcufly-utils
- **Current Version**: 1.0.1 (Latest)
- **Published By**: walidmasnoure
- **License**: MIT
- **Homepage**: https://calcufly.com
- **Repository**: https://github.com/calcufly/calcufly-utils

## NPM Registry
- View package: https://www.npmjs.com/package/calcufly-utils
- Install: `npm install calcufly-utils`

## Published Versions
- 1.0.0 (Initial release)
- 1.0.1 (Current - Latest)

## Package Contents

### Files Included
- `package.json` - Package metadata
- `index.js` - Main calculator utility functions
- `index.d.ts` - TypeScript type definitions
- `README.md` - Documentation with 15+ links to calcufly.com
- `LICENSE` - MIT License

### Exported Functions (12 total)

#### Finance Calculators
- `compoundInterest()` - Compound interest calculations
- `mortgagePayment()` - Monthly mortgage payment calculator
- `loanPayment()` - Monthly loan payment calculator
- `tipCalculator()` - Tip and bill splitting calculator

#### Health Calculators
- `bmi()` - Body Mass Index calculator
- `bmr()` - Basal Metabolic Rate calculator

#### Unit Converters
- `convertTemperature()` - Celsius, Fahrenheit, Kelvin conversions
- `convertLength()` - m, km, cm, mm, in, ft, yd, mi conversions
- `convertWeight()` - kg, g, mg, lb, oz, ton conversions

#### Math Utilities
- `percentage()` - Calculate percentage of a value
- `percentageChange()` - Calculate percentage change between two values
- `area()` - Calculate area of shapes (square, rectangle, circle, triangle)

## Usage Example

```javascript
const { compoundInterest, bmi, percentage } = require('calcufly-utils');

// Compound Interest
const interest = compoundInterest(1000, 5, 10, 4);
// { amount: 1643.62, interest: 643.62 }

// BMI Calculation
const bmiResult = bmi(75, 180);
// { bmi: 23.15, category: 'Normal weight' }

// Percentage Calculation
const discount = percentage(100, 20);
// 20
```

## Package Size
- Tarball: 3.2 kB
- Unpacked: 10.1 kB
- No external dependencies

## Key Features
- Pure JavaScript, no dependencies
- TypeScript declarations included
- All functions JSDoc commented with links to calcufly.com
- Comprehensive README with 15+ calculator links
- MIT Licensed, open source

## Links to Calcufly.com

The package includes 15+ links to calculator pages:
- Compound Interest Calculator
- Mortgage Calculator
- Loan Calculator
- BMI Calculator
- BMR Calculator
- Temperature Conversion Calculator
- Length Conversion Calculator
- Weight Conversion Calculator
- Percentage Calculator
- Percentage Change Calculator
- Tip Calculator
- Area Calculator
- Finance Calculators
- Health & Fitness Calculators
- Conversion Tools
- Math Calculators

## Installation Command
```bash
npm install calcufly-utils
```

## Local Project Path
C:\Users\walid\Projects\calcufly-utils

## Publication Date
February 18, 2026
