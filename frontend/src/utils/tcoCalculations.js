/**
 * TCO (Total Cost of Ownership) Calculation Engine
 * Based on Excel TCO Model for Electric vs Diesel Trucks
 */

/**
 * Calculate diesel truck analysis
 */
export function calculateDieselAnalysis(inputs, truckType = 'euro') {
  const params = truckType === 'euro' ? inputs.euroDiesel : inputs.chineseDiesel;
  
  // 1. ENERGY COST
  const fuelConsumptionPerKm = 1 / params.consumption;
  const dieselPrice = params.price;
  const energyCostPerKm = fuelConsumptionPerKm * dieselPrice;
  const annualKm = inputs.returnTripDistance * params.tripsPerMonth * params.monthsPerYear;
  const energyCostPerYear = energyCostPerKm * annualKm;
  
  // 2. CAPITAL COST PER KM
  const purchasePrice = params.purchasePrice;
  const residualValue = purchasePrice * inputs.residualValuePercent;
  const pvResidualValue = residualValue / Math.pow(1 + inputs.interestRate, inputs.loanTerm);
  const financedAmount = purchasePrice - pvResidualValue;
  const annualLoanPayment = financedAmount * 
    (inputs.interestRate * Math.pow(1 + inputs.interestRate, inputs.loanTerm)) / 
    (Math.pow(1 + inputs.interestRate, inputs.loanTerm) - 1);
  const totalLifetimeKm = annualKm * inputs.truckLifespan;
  const capitalCostPerKm = annualLoanPayment / annualKm;
  
  // 3. OTHER COSTS
  const otherCostsPerKm = inputs.otherCostsPerKm;
  const otherCostsPerYear = otherCostsPerKm * annualKm;
  
  // TOTAL COSTS
  const totalCostPerKmLoanPeriod = energyCostPerKm + capitalCostPerKm + otherCostsPerKm;
  const annualCostFinancePeriod = annualLoanPayment + otherCostsPerYear + energyCostPerYear;
  const annualCostPostFinance = energyCostPerYear + otherCostsPerYear;
  const lifetimeCost = (annualCostFinancePeriod * inputs.loanTerm) + 
    ((inputs.truckLifespan - inputs.loanTerm) * annualCostPostFinance) + residualValue;
  const tcoCpk = lifetimeCost / totalLifetimeKm;
  
  return {
    energyCostPerKm,
    energyCostPerYear,
    capitalCostPerKm,
    otherCostsPerKm,
    otherCostsPerYear,
    totalCostPerKmLoanPeriod,
    annualCostFinancePeriod,
    annualCostPostFinance,
    lifetimeCost,
    tcoCpk,
    annualKm,
    totalLifetimeKm,
    annualLoanPayment,
    residualValue
  };
}

/**
 * Calculate electric truck analysis
 */
export function calculateElectricAnalysis(inputs, truckType = 'charged') {
  let params;
  if (truckType === 'charged') params = inputs.electricCharged;
  else if (truckType === 'swapped') params = inputs.electricSwapped;
  else params = inputs.electricBaaS;
  
  const annualKm = inputs.returnTripDistance * params.tripsPerMonth * params.monthsPerYear;
  
  // 1. ENERGY COST
  const electricityConsumptionPerKm = params.consumption;
  let electricityPrice = params.price;
  
  // For BaaS, add battery service cost to electricity price
  if (truckType === 'baas') {
    const batteryServicePerYear = (inputs.electricBaaS.batteryPrice / inputs.electricBaaS.purchasePrice) * annualKm * 1.1;
    electricityPrice = params.price + (batteryServicePerYear / annualKm);
  }
  
  const energyCostPerKm = electricityConsumptionPerKm * electricityPrice;
  const energyCostPerYear = energyCostPerKm * annualKm;
  
  // 2. CAPITAL COST
  const purchasePrice = params.purchasePrice;
  const residualValue = purchasePrice * inputs.residualValuePercent;
  const pvResidualValue = residualValue / Math.pow(1 + inputs.interestRate, inputs.loanTerm);
  const financedAmount = purchasePrice - pvResidualValue;
  const annualLoanPayment = financedAmount * 
    (inputs.interestRate * Math.pow(1 + inputs.interestRate, inputs.loanTerm)) / 
    (Math.pow(1 + inputs.interestRate, inputs.loanTerm) - 1);
  const totalLifetimeKm = annualKm * inputs.truckLifespan;
  const capitalCostPerKm = annualLoanPayment / annualKm;
  
  // 3. OTHER COSTS
  const otherCostsPerKm = inputs.otherCostsPerKm;
  const otherCostsPerYear = otherCostsPerKm * annualKm;
  
  // TOTAL COSTS
  const totalCostPerKmLoanPeriod = energyCostPerKm + capitalCostPerKm + otherCostsPerKm;
  const annualCostFinancePeriod = energyCostPerYear + annualLoanPayment + otherCostsPerYear;
  const annualCostPostFinance = energyCostPerYear + otherCostsPerYear;
  const lifetimeCost = (annualCostFinancePeriod * inputs.loanTerm) + 
    ((inputs.truckLifespan - inputs.loanTerm) * annualCostPostFinance) + residualValue;
  const tcoCpk = lifetimeCost / totalLifetimeKm;
  
  return {
    energyCostPerKm,
    energyCostPerYear,
    capitalCostPerKm,
    otherCostsPerKm,
    otherCostsPerYear,
    totalCostPerKmLoanPeriod,
    annualCostFinancePeriod,
    annualCostPostFinance,
    lifetimeCost,
    tcoCpk,
    annualKm,
    totalLifetimeKm,
    annualLoanPayment,
    residualValue
  };
}

/**
 * Generate comparison between diesel and electric trucks
 */
export function generateComparison(dieselResults, electricResults) {
  return {
    costPerKm: {
      energyCost: {
        diesel: dieselResults.energyCostPerKm,
        electric: electricResults.energyCostPerKm,
        savings: dieselResults.energyCostPerKm - electricResults.energyCostPerKm
      },
      capitalCost: {
        diesel: dieselResults.capitalCostPerKm,
        electric: electricResults.capitalCostPerKm,
        savings: dieselResults.capitalCostPerKm - electricResults.capitalCostPerKm
      },
      otherCosts: {
        diesel: dieselResults.otherCostsPerKm,
        electric: electricResults.otherCostsPerKm,
        savings: dieselResults.otherCostsPerKm - electricResults.otherCostsPerKm
      },
      total: {
        diesel: dieselResults.totalCostPerKmLoanPeriod,
        electric: electricResults.totalCostPerKmLoanPeriod,
        savings: dieselResults.totalCostPerKmLoanPeriod - electricResults.totalCostPerKmLoanPeriod,
        savingsPercent: ((dieselResults.totalCostPerKmLoanPeriod - electricResults.totalCostPerKmLoanPeriod) / 
          dieselResults.totalCostPerKmLoanPeriod) * 100
      }
    },
    annualCosts: {
      diesel: dieselResults.annualCostFinancePeriod,
      electric: electricResults.annualCostFinancePeriod,
      savings: dieselResults.annualCostFinancePeriod - electricResults.annualCostFinancePeriod
    },
    lifetimeCosts: {
      diesel: dieselResults.lifetimeCost,
      electric: electricResults.lifetimeCost,
      savings: dieselResults.lifetimeCost - electricResults.lifetimeCost,
      savingsPercent: ((dieselResults.lifetimeCost - electricResults.lifetimeCost) / 
        dieselResults.lifetimeCost) * 100
    },
    tcoCpk: {
      diesel: dieselResults.tcoCpk,
      electric: electricResults.tcoCpk,
      difference: electricResults.tcoCpk - dieselResults.tcoCpk,
      differencePercent: ((electricResults.tcoCpk - dieselResults.tcoCpk) / 
        dieselResults.tcoCpk) * 100
    }
  };
}

/**
 * Calculate break-even analysis
 */
export function calculateBreakEven(dieselResults, electricResults, inputs) {
  const annualSavings = dieselResults.annualCostFinancePeriod - electricResults.annualCostFinancePeriod;
  const additionalUpfrontCost = inputs.electricCharged.purchasePrice - inputs.euroDiesel.purchasePrice;
  
  if (annualSavings <= 0) {
    return {
      years: null,
      message: "Electric truck does not break even - diesel is cheaper"
    };
  }
  
  const breakEvenYears = additionalUpfrontCost / annualSavings;
  
  return {
    years: breakEvenYears,
    months: breakEvenYears * 12,
    additionalUpfrontCost,
    annualSavings,
    message: breakEvenYears <= inputs.truckLifespan 
      ? `Electric truck breaks even in ${breakEvenYears.toFixed(1)} years`
      : `Electric truck does not break even within ${inputs.truckLifespan} year lifespan`
  };
}

/**
 * Calculate environmental impact (CO2 emissions)
 */
export function calculateEnvironmentalImpact(dieselResults, electricResults) {
  // Average CO2 emissions: Diesel = 2.68 kg CO2 per liter
  // Electric grid emission factor varies by country (using average 0.5 kg CO2 per kWh)
  const dieselEmissionFactor = 2.68; // kg CO2 per liter
  const electricEmissionFactor = 0.5; // kg CO2 per kWh
  
  const dieselConsumptionPerKm = 1 / 2.5; // From consumption rate
  const electricConsumptionPerKm = 1.35; // kWh per km
  
  const dieselCO2PerKm = dieselConsumptionPerKm * dieselEmissionFactor;
  const electricCO2PerKm = electricConsumptionPerKm * electricEmissionFactor;
  
  const annualDieselCO2 = dieselCO2PerKm * dieselResults.annualKm;
  const annualElectricCO2 = electricCO2PerKm * electricResults.annualKm;
  
  const lifetimeDieselCO2 = annualDieselCO2 * 10;
  const lifetimeElectricCO2 = annualElectricCO2 * 10;
  
  return {
    perKm: {
      diesel: dieselCO2PerKm,
      electric: electricCO2PerKm,
      reduction: dieselCO2PerKm - electricCO2PerKm,
      reductionPercent: ((dieselCO2PerKm - electricCO2PerKm) / dieselCO2PerKm) * 100
    },
    annual: {
      diesel: annualDieselCO2,
      electric: annualElectricCO2,
      reduction: annualDieselCO2 - annualElectricCO2,
      reductionPercent: ((annualDieselCO2 - annualElectricCO2) / annualDieselCO2) * 100
    },
    lifetime: {
      diesel: lifetimeDieselCO2,
      electric: lifetimeElectricCO2,
      reduction: lifetimeDieselCO2 - lifetimeElectricCO2,
      reductionPercent: ((lifetimeDieselCO2 - lifetimeElectricCO2) / lifetimeDieselCO2) * 100
    }
  };
}

/**
 * Get default inputs for a specific corridor
 */
export function getDefaultInputs(corridor = 'south-africa') {
  const corridorDefaults = {
    'south-africa': {
      name: 'South Africa - N3 Corridor',
      currency: 'ZAR',
      currencySymbol: 'R',
      distance: 600,
      exchangeRate: 17.5
    },
    'kenya': {
      name: 'Kenya - Mombasa to Nairobi',
      currency: 'KES',
      currencySymbol: 'KSh',
      distance: 480,
      exchangeRate: 130
    },
    'tanzania': {
      name: 'Tanzania - Central Corridor',
      currency: 'TZS',
      currencySymbol: 'TSh',
      distance: 1420,
      exchangeRate: 2500
    },
    'ethiopia': {
      name: 'Ethiopia - Addis Ababa to Djibouti',
      currency: 'ETB',
      currencySymbol: 'Br',
      distance: 950,
      exchangeRate: 55
    }
  };
  
  const corridor_info = corridorDefaults[corridor] || corridorDefaults['south-africa'];
  
  return {
    corridor: corridor,
    corridorName: corridor_info.name,
    currency: corridor_info.currency,
    currencySymbol: corridor_info.currencySymbol,
    exchangeRate: corridor_info.exchangeRate,
    
    // Corridor Parameters
    distanceOneWay: corridor_info.distance,
    returnTripDistance: corridor_info.distance * 2,
    daysPerYear: 365,
    
    // Operating Parameters
    otherCostsPerKm: 6,
    
    // Financial Parameters
    interestRate: 0.105,
    loanTerm: 5,
    truckLifespan: 10,
    residualValuePercent: 0.25,
    
    // Diesel Trucks
    euroDiesel: {
      purchasePrice: 2200000,
      consumption: 2.5, // km per liter
      price: 18, // Rand per liter
      tripsPerMonth: 12,
      monthsPerYear: 12
    },
    chineseDiesel: {
      purchasePrice: 1400000,
      consumption: 2.3,
      price: 18,
      tripsPerMonth: 12,
      monthsPerYear: 12
    },
    
    // Electric Trucks
    electricCharged: {
      purchasePrice: 4500000,
      consumption: 1.35, // kWh per km
      price: 2.5, // Rand per kWh
      tripsPerMonth: 8,
      monthsPerYear: 12
    },
    electricSwapped: {
      purchasePrice: 4500000,
      consumption: 1.35,
      price: 2.5,
      tripsPerMonth: 12,
      monthsPerYear: 12
    },
    electricBaaS: {
      purchasePrice: 2500000,
      batteryPrice: 2000000,
      consumption: 1.35,
      price: 2.5,
      tripsPerMonth: 12,
      monthsPerYear: 12
    }
  };
}
