/**
 * calcufly-utils v1.0.0
 * Math, finance, health and conversion calculator utilities
 * 600+ free online calculators: https://calcufly.com
 */

const math = {
  percentage(value, total) {
    if (total === 0) throw new Error("Total cannot be zero");
    return parseFloat(((value / total) * 100).toFixed(2));
  },
  ratio(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const d = gcd(Math.abs(a), Math.abs(b));
    return a/d + ":" + b/d;
  }
};

const finance = {
  mortgage({ principal, rate, years }) {
    const r = rate / 100 / 12, n = years * 12;
    const monthly = principal * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    const total = monthly * n;
    return { monthly: +monthly.toFixed(2), total: +total.toFixed(2), interest: +(total-principal).toFixed(2) };
  },
  compoundInterest({ principal, rate, years, compounding = 12 }) {
    const amount = principal * Math.pow(1 + (rate/100)/compounding, compounding*years);
    return { finalAmount: +amount.toFixed(2), interest: +(amount-principal).toFixed(2) };
  },
  roi({ initialInvestment, finalValue }) {
    return +(((finalValue-initialInvestment)/initialInvestment)*100).toFixed(2);
  }
};

const health = {
  bmi({ weight, height }) {
    const value = +(weight/(height*height)).toFixed(2);
    const category = value < 18.5 ? "Underweight" : value < 25 ? "Normal" : value < 30 ? "Overweight" : "Obese";
    return { value, category };
  },
  bmr({ weight, height, age, gender }) {
    const base = 10*weight + 6.25*(height*100) - 5*age;
    return +(gender === "male" ? base+5 : base-161).toFixed(0);
  }
};

const conversion = {
  length(value, from, to) {
    const m = {m:1,km:1000,cm:0.01,mm:0.001,mi:1609.344,ft:0.3048,in:0.0254,yd:0.9144};
    return +(value * m[from] / m[to]).toFixed(6);
  },
  temperature(value, from, to) {
    let c = from==="C" ? value : from==="F" ? (value-32)*5/9 : value-273.15;
    return +(to==="C" ? c : to==="F" ? c*9/5+32 : c+273.15).toFixed(2);
  }
};

module.exports = { math, finance, health, conversion };
