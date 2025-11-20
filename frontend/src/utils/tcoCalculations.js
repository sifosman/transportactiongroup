/**
 * TCO (Total Cost of Ownership) Calculation Engine
 * Based on Excel TCO Model for Electric vs Diesel Trucks
 */

/**
 * Calculate diesel truck analysis (matches Excel Diesel Analysis sheet)
 */
export function calculateDieselAnalysis(inputs, truckType = 'euro') {
  const params = truckType === 'euro' ? inputs.euroDiesel : inputs.chineseDiesel;
  const returnTripDistance = inputs.distanceOneWay * 2;
  
  // Calculated values from Inputs sheet
  const annualKm = returnTripDistance * params.tripsPerMonth * 12; // Monthly trips * 12 months
  const otherCostsPerKm = ((params.insuranceAnnualPremiumPercent * (params.purchasePrice / 2)) / annualKm) + 
                          params.maintenanceCostPerKm + params.otherCostsPerKm;
  
  // 1. ENERGY COST
  const fuelConsumptionPerKm = 1 / params.consumption; // liters per km
  const dieselPrice = params.fuelPrice;
  const energyCostPerKm = fuelConsumptionPerKm * dieselPrice;
  const energyCostPerYear = energyCostPerKm * annualKm;
  
  // 2. CAPITAL COST PER KM IN LOAN PERIOD
  const purchasePrice = params.purchasePrice;
  const residualValue = purchasePrice * params.residualValuePercent;
  const pvResidualValue = residualValue / Math.pow(1 + params.interestRate, params.loanTerm);
  const financedAmount = purchasePrice - pvResidualValue;
  const annualLoanPayment = financedAmount * 
    (params.interestRate * Math.pow(1 + params.interestRate, params.loanTerm)) / 
    (Math.pow(1 + params.interestRate, params.loanTerm) - 1);
  const totalLoanRepayments = annualLoanPayment * params.loanTerm;
  const capitalCostPerKm = annualLoanPayment / annualKm;
  
  // 3. OTHER COSTS
  const otherCostsPerYear = otherCostsPerKm * annualKm;
  
  // TOTAL COST PER KM IN LOAN PERIOD
  const totalCostPerKmLoanPeriod = energyCostPerKm + capitalCostPerKm + otherCostsPerKm;
  const totalCostPerYearLoanPeriod = totalCostPerKmLoanPeriod * annualKm;
  
  // TOTAL COST PER KM AFTER LOAN PERIOD
  const capitalCostPerKmPostLoan = ((params.residualValuePercent - params.endOfLifeValuePercent) * params.purchasePrice) / 
                                    (annualKm * (inputs.infrastructureLifespan - inputs.infrastructureLoanTerm));
  const totalCostPerKmPostLoan = energyCostPerKm + capitalCostPerKmPostLoan + otherCostsPerKm;
  const totalCostPerYearPostLoan = totalCostPerKmPostLoan * annualKm;
  
  // ANNUAL AND LIFETIME COSTS
  const annualCostFinancePeriod = annualLoanPayment + otherCostsPerYear + energyCostPerYear;
  const annualCostPostFinance = energyCostPerYear + otherCostsPerYear;
  const endOfLifeValue = params.endOfLifeValuePercent * params.purchasePrice;
  const lifetimeCost = (annualCostFinancePeriod * params.loanTerm) + 
                       ((params.lifespan - params.loanTerm) * annualCostPostFinance) - 
                       endOfLifeValue;
  const totalLifetimeKm = annualKm * params.lifespan;
  const tcoCpk = lifetimeCost / totalLifetimeKm;
  
  // CO2 Emissions
  const co2PerKm = fuelConsumptionPerKm * params.emissionsFactor;
  const co2PerYear = (co2PerKm * annualKm) / 1000; // Convert to tonnes
  
  return {
    energyCostPerKm,
    energyCostPerYear,
    capitalCostPerKm,
    otherCostsPerKm,
    otherCostsPerYear,
    totalCostPerKmLoanPeriod,
    totalCostPerYearLoanPeriod,
    capitalCostPerKmPostLoan,
    totalCostPerKmPostLoan,
    totalCostPerYearPostLoan,
    annualCostFinancePeriod,
    annualCostPostFinance,
    endOfLifeValue,
    lifetimeCost,
    tcoCpk,
    annualKm,
    totalLifetimeKm,
    annualLoanPayment,
    totalLoanRepayments,
    residualValue,
    co2PerKm,
    co2PerYear
  };
}

/**
 * Calculate electric truck analysis (matches Excel Electric Analysis sheet)
 */
export function calculateElectricAnalysis(inputs, truckType = 'europeanEV') {
  let params;
  if (truckType === 'europeanEV') params = inputs.europeanEV;
  else if (truckType === 'chineseEVCharged') params = inputs.chineseEVCharged;
  else if (truckType === 'chineseEVSwapped') params = inputs.chineseEVSwapped;
  else params = inputs.chineseEVBaaS;
  
  const returnTripDistance = inputs.distanceOneWay * 2;
  
  // Calculated values from Inputs sheet
  const annualKm = returnTripDistance * params.tripsPerMonth * 12;
  
  // Calculate charging time for EV trucks
  const oneWayTripEnergy = inputs.distanceOneWay * params.consumption;
  const batteryChargingTime = (oneWayTripEnergy / inputs.corridorChargePower) * 1.2;
  
  const otherCostsPerKm = ((params.insuranceAnnualPremiumPercent * (params.purchasePrice / 2)) / annualKm) + 
                          params.maintenanceCostPerKm + params.otherCostsPerKm;
  
  // 1. ENERGY COST
  const electricityConsumptionPerKm = params.consumption;
  const electricityPrice = params.electricityPrice;
  const energyCostPerKm = electricityConsumptionPerKm * electricityPrice;
  const energyCostPerYear = energyCostPerKm * annualKm;
  const energyUsagePerYear = annualKm * electricityConsumptionPerKm;
  
  // 2. CAPITAL COST PER KM IN LOAN PERIOD
  const purchasePrice = params.purchasePrice;
  const residualValue = purchasePrice * params.residualValuePercent;
  const pvResidualValue = residualValue / Math.pow(1 + params.interestRate, params.loanTerm);
  const financedAmount = purchasePrice - pvResidualValue;
  const annualLoanPayment = financedAmount * 
    (params.interestRate * Math.pow(1 + params.interestRate, params.loanTerm)) / 
    (Math.pow(1 + params.interestRate, params.loanTerm) - 1);
  
  // Battery as a Service calculation (for BaaS only) - calculate after annualLoanPayment
  const batteryServicePerYear = truckType === 'chineseEVBaaS' 
    ? (((params.batteryPrice) / (params.purchasePrice + params.batteryPrice)) * annualLoanPayment) * 1.1
    : 0;
  const totalLoanRepayments = annualLoanPayment * params.loanTerm;
  const capitalCostPerKm = annualLoanPayment / annualKm;
  
  // 3. OTHER COSTS
  // For BaaS, add battery service to other costs per km
  const otherCostsPerKmAdjusted = truckType === 'chineseEVBaaS'
    ? otherCostsPerKm + (batteryServicePerYear / annualKm)
    : otherCostsPerKm;
  const otherCostsPerYear = otherCostsPerKmAdjusted * annualKm;
  
  // TOTAL COST PER KM IN LOAN PERIOD
  const totalCostPerKmLoanPeriod = energyCostPerKm + capitalCostPerKm + otherCostsPerKmAdjusted;
  const totalCostPerYearLoanPeriod = totalCostPerKmLoanPeriod * annualKm;
  
  // TOTAL COST PER KM AFTER LOAN PERIOD
  const capitalCostPerKmPostLoan = ((params.residualValuePercent - params.endOfLifeValuePercent) * params.purchasePrice) / 
                                    (annualKm * (inputs.infrastructureLifespan - inputs.infrastructureLoanTerm));
  const totalCostPerKmPostLoan = energyCostPerKm + capitalCostPerKmPostLoan + otherCostsPerKmAdjusted;
  const totalCostPerYearPostLoan = totalCostPerKmPostLoan * annualKm;
  
  // ANNUAL AND LIFETIME COSTS
  const annualCostFinancePeriod = annualLoanPayment + otherCostsPerYear;
  const annualCostPostFinance = otherCostsPerYear;
  const endOfLifeValue = params.endOfLifeValuePercent * params.purchasePrice;
  const lifetimeCost = (annualCostFinancePeriod * params.loanTerm) + 
                       ((params.lifespan - params.loanTerm) * annualCostPostFinance) - 
                       endOfLifeValue;
  const totalLifetimeKm = annualKm * params.lifespan;
  const tcoCpk = lifetimeCost / totalLifetimeKm;
  
  // CO2 Emissions
  const co2PerKm = electricityConsumptionPerKm * params.emissionsFactor;
  const co2PerYear = co2PerKm * annualKm; // Already in kg, no conversion needed for zero emissions
  
  return {
    energyCostPerKm,
    energyCostPerYear,
    energyUsagePerYear,
    capitalCostPerKm,
    otherCostsPerKm: otherCostsPerKmAdjusted,
    otherCostsPerYear,
    totalCostPerKmLoanPeriod,
    totalCostPerYearLoanPeriod,
    capitalCostPerKmPostLoan,
    totalCostPerKmPostLoan,
    totalCostPerYearPostLoan,
    annualCostFinancePeriod,
    annualCostPostFinance,
    endOfLifeValue,
    lifetimeCost,
    tcoCpk,
    annualKm,
    totalLifetimeKm,
    annualLoanPayment,
    totalLoanRepayments,
    residualValue,
    co2PerKm,
    co2PerYear,
    batteryChargingTime,
    batteryServicePerYear
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
    
    // Financial Parameters
    exchangeRate: corridor_info.exchangeRate,
    chargeOutFreightRate: 20, // Rand per km to customer
    
    // Corridor Parameters
    distanceOneWay: corridor_info.distance,
    
    // Charging Infrastructure
    numberOfChargingStations: 3,
    costPerStationInstalled: 11000000,
    maxNumberOfTrucks: 50,
    percentEnergyFromCorridor: 1,
    corridorChargePower: 180, // kW
    ownChargingPriceOfEnergy: 2.75,
    percentEnergyFromOwnCharging: 0,
    
    // Charging Infrastructure Financing
    infrastructureInterestRate: 0.105,
    infrastructureLoanTerm: 5,
    infrastructureLifespan: 10,
    infrastructureEndOfLifeValue: 0.1,
    
    // Diesel Trucks - Euro
    euroDiesel: {
      // Operating Parameters
      permissableOperationalHoursPerDay: 12,
      averageDrivingTime: 9,
      loadOffloadTime: 2,
      averageStoppingTime: 1,
      workingDaysPerMonth: 24,
      tripsPerMonth: 12,
      
      // Other Operating Costs
      insuranceAnnualPremiumPercent: 0.06,
      maintenanceCostPerKm: 1.1,
      otherCostsPerKm: 4,
      
      // Purchase Price
      purchasePrice: 2200000,
      
      // Fuel Parameters
      consumption: 2.5, // km per liter
      fuelPrice: 18, // Rand per liter
      emissionsFactor: 3.48, // kgCO2e per liter
      
      // Financing Parameters
      interestRate: 0.105,
      loanTerm: 5,
      lifespan: 10,
      residualValuePercent: 0.3,
      endOfLifeValuePercent: 0.1,
      
      // Forex
      dieselImportPercent: 1,
      truckImportPercent: 1
    },
    
    // Diesel Trucks - Chinese
    chineseDiesel: {
      permissableOperationalHoursPerDay: 12,
      averageDrivingTime: 9,
      loadOffloadTime: 2,
      averageStoppingTime: 1,
      workingDaysPerMonth: 24,
      tripsPerMonth: 12,
      insuranceAnnualPremiumPercent: 0.06,
      maintenanceCostPerKm: 0.9,
      otherCostsPerKm: 4,
      purchasePrice: 1400000,
      consumption: 2.3,
      fuelPrice: 18,
      emissionsFactor: 3.48,
      interestRate: 0.105,
      loanTerm: 5,
      lifespan: 8,
      residualValuePercent: 0.2,
      endOfLifeValuePercent: 0.1,
      dieselImportPercent: 1,
      truckImportPercent: 1
    },
    
    // Electric Trucks - European EV
    europeanEV: {
      permissableOperationalHoursPerDay: 12,
      averageDrivingTime: 9,
      loadOffloadTime: 2,
      averageStoppingTime: 1, // Plus charging time calculated
      workingDaysPerMonth: 24,
      tripsPerMonth: 8,
      insuranceAnnualPremiumPercent: 0.06,
      maintenanceCostPerKm: 0.55,
      otherCostsPerKm: 4,
      purchasePrice: 6500000,
      consumption: 1.25, // kWh per km
      electricityPrice: 2.75, // Rand per kWh
      electricityCostToCPO: 1.5,
      emissionsFactor: 0, // Wheeled solar electricity
      interestRate: 0.105,
      loanTerm: 5,
      lifespan: 10,
      residualValuePercent: 0.25,
      endOfLifeValuePercent: 0.1,
      truckImportPercent: 1,
      chargeEquipmentImportPercent: 0.7
    },
    
    // Electric Trucks - Chinese EV Charged
    chineseEVCharged: {
      permissableOperationalHoursPerDay: 12,
      averageDrivingTime: 9,
      loadOffloadTime: 2,
      averageStoppingTime: 1,
      workingDaysPerMonth: 24,
      tripsPerMonth: 8,
      insuranceAnnualPremiumPercent: 0.06,
      maintenanceCostPerKm: 0.45,
      otherCostsPerKm: 4,
      purchasePrice: 4500000,
      consumption: 1.3,
      electricityPrice: 2.75,
      electricityCostToCPO: 1.5,
      emissionsFactor: 0,
      interestRate: 0.105,
      loanTerm: 5,
      lifespan: 10,
      residualValuePercent: 0.25,
      endOfLifeValuePercent: 0.1,
      truckImportPercent: 1,
      chargeEquipmentImportPercent: 0.7
    },
    
    // Electric Trucks - Chinese EV Swapped
    chineseEVSwapped: {
      permissableOperationalHoursPerDay: 12,
      averageDrivingTime: 9,
      loadOffloadTime: 2,
      averageStoppingTime: 1,
      workingDaysPerMonth: 24,
      tripsPerMonth: 12,
      insuranceAnnualPremiumPercent: 0.06,
      maintenanceCostPerKm: 0.45,
      otherCostsPerKm: 4,
      purchasePrice: 4500000,
      consumption: 1.35,
      electricityPrice: 2.75,
      electricityCostToCPO: 1.5,
      emissionsFactor: 0,
      interestRate: 0.105,
      loanTerm: 5,
      lifespan: 10,
      residualValuePercent: 0.25,
      endOfLifeValuePercent: 0.1,
      truckImportPercent: 1,
      chargeEquipmentImportPercent: 0.7
    },
    
    // Electric Trucks - Chinese EV BaaS
    chineseEVBaaS: {
      permissableOperationalHoursPerDay: 12,
      averageDrivingTime: 9,
      loadOffloadTime: 2,
      averageStoppingTime: 1,
      workingDaysPerMonth: 24,
      tripsPerMonth: 12,
      insuranceAnnualPremiumPercent: 0.06,
      maintenanceCostPerKm: 0.45,
      otherCostsPerKm: 4,
      purchasePrice: 2500000,
      batteryPrice: 2000000,
      consumption: 1.35,
      electricityPrice: 2.75,
      electricityCostToCPO: 1.5,
      emissionsFactor: 0,
      interestRate: 0.105,
      loanTerm: 5,
      lifespan: 10,
      residualValuePercent: 0.25,
      endOfLifeValuePercent: 0.1,
      truckImportPercent: 1,
      chargeEquipmentImportPercent: 0.7
    }
  };
}
