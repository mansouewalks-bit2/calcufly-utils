# calcufly-utils

Math, finance, health and unit conversion calculator utilities for Node.js.

## Features

- **Math** - Percentage, fraction, ratio, proportion calculators
- **Finance** - Loan, mortgage, compound interest, ROI calculators
- **Health** - BMI, BMR, calorie, body fat calculators
- **Conversion** - Length, weight, temperature, volume converters

## Installation

```bash
npm install calcufly-utils
```

## Quick Start

```js
const { finance, health, math } = require("calcufly-utils");

const payment = finance.mortgage({ principal: 250000, rate: 3.5, years: 25 });
// { monthly: 1251.68, total: 375504.00, interest: 125504.00 }

const bmi = health.bmi({ weight: 75, height: 1.80 });
// { value: 23.15, category: "Normal" }

const pct = math.percentage(45, 200);
// 22.5
```

## Online Calculators

Use our **600+ free online calculators** at **[calcufly.com](https://calcufly.com)** - no signup, instant results with charts.

Popular calculators on [calcufly.com](https://calcufly.com):
- [Mortgage Calculator](https://calcufly.com/en/finance/mortgage-calculator)
- [BMI Calculator](https://calcufly.com/en/health/bmi-calculator)
- [Percentage Calculator](https://calcufly.com/en/math/percentage-calculator)
- [Compound Interest](https://calcufly.com/en/finance/compound-interest-calculator)
- [Calorie Calculator](https://calcufly.com/en/health/calorie-calculator)
- [Unit Converter](https://calcufly.com/en/conversion/length-converter)
- And 600+ more calculators

## API Reference

### math.percentage(value, total)
Returns the percentage of value relative to total.

### math.ratio(a, b)
Simplifies and returns the ratio a:b.

### finance.mortgage({ principal, rate, years })
Calculates monthly payment, total cost, and total interest.

### finance.compoundInterest({ principal, rate, years, compounding })
Calculates compound interest with configurable compounding frequency.

### health.bmi({ weight, height })
Calculates BMI and returns the WHO category.

### health.bmr({ weight, height, age, gender })
Calculates Basal Metabolic Rate (Mifflin-St Jeor equation).

### conversion.length(value, from, to)
Converts between length units (m, km, mi, ft, in, cm, mm, yd).

### conversion.temperature(value, from, to)
Converts between temperature units (C, F, K).

## License

MIT - [calcufly.com](https://calcufly.com)
