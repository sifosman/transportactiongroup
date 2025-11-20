# TCO Calculator Updates - Based on New Excel Model

## Changes Completed

### 1. Updated Default Inputs (`tcoCalculations.js`)
✅ All default values now match the Excel spreadsheet exactly:
- **Financial Parameters**: Exchange rate, charge out freight rate
- **Corridor Parameters**: Distance one way
- **Charging Infrastructure**: Stations, cost, power, energy pricing
- **Infrastructure Financing**: Interest rate, loan term, lifespan
- **Diesel Trucks** (Euro & Chinese): All operating parameters, costs, fuel, financing
- **Electric Trucks** (4 types): European EV, Chinese EV Charged, Chinese EV Swapped, Chinese EV BaaS

### 2. Updated Calculation Formulas (`tcoCalculations.js`)
✅ **Diesel Analysis**: Matches Excel "Diesel Analysis" sheet exactly
- Energy cost calculation with fuel consumption per km
- Capital cost with PV of residual value
- Other costs including insurance, maintenance
- Loan period and post-loan period costs
- Lifetime costs and TCO CPK
- CO2 emissions

✅ **Electric Analysis**: Matches Excel "Electric Analysis" sheet exactly
- Energy cost with electricity consumption
- Battery charging time calculation
- Capital cost with financing
- Battery as a Service (BaaS) special handling
- Other costs adjusted for BaaS
- Loan and post-loan period costs
- Lifetime costs and TCO CPK
- CO2 emissions (zero for solar)

### 3. Updated Calculator Component (`TCOCalculator.jsx`)
✅ Updated truck type names to match new structure:
- `europeanEV` (was `charged`)
- `chineseEVCharged` (new)
- `chineseEVSwapped` (was `swapped`)
- `chineseEVBaaS` (was `baas`)

## Input Parameters Structure

### Shared Parameters
- Exchange rate (Rand per USD): 17.5
- Charge out freight rate: R20/km
- Distance one way: 600 km
- Charging infrastructure: 3 stations @ R11,000,000 each
- Corridor charge power: 180 kW

### Per-Truck Parameters (Yellow Cells Only - User Editable)

#### Euro Diesel Truck
- Purchase price: R2,200,000
- Consumption: 2.5 km/L
- Fuel price: R18/L
- Trips per month: 12
- Lifespan: 10 years
- Loan term: 5 years
- Interest rate: 10.5%
- Residual value: 30%
- Maintenance: R1.10/km

#### Chinese Diesel Truck  
- Purchase price: R1,400,000
- Consumption: 2.3 km/L
- Fuel price: R18/L
- Trips per month: 12
- Lifespan: 8 years
- Residual value: 20%
- Maintenance: R0.90/km

#### European EV Truck
- Purchase price: R6,500,000
- Consumption: 1.25 kWh/km
- Electricity price: R2.75/kWh
- Trips per month: 8 (due to charging time)
- Lifespan: 10 years
- Maintenance: R0.55/km

#### Chinese EV Charged
- Purchase price: R4,500,000
- Consumption: 1.3 kWh/km
- Electricity price: R2.75/kWh
- Trips per month: 8
- Lifespan: 10 years
- Maintenance: R0.45/km

#### Chinese EV Swapped
- Purchase price: R4,500,000
- Consumption: 1.35 kWh/km
- Electricity price: R2.75/kWh
- Trips per month: 12 (battery swap allows full schedule)
- Lifespan: 10 years
- Maintenance: R0.45/km

#### Chinese EV BaaS (Battery as a Service)
- Purchase price: R2,500,000 (without battery)
- Battery price: R2,000,000 (rental/subscription)
- Consumption: 1.35 kWh/km
- Electricity price: R2.75/kWh
- Trips per month: 12
- Lifespan: 10 years
- Maintenance: R0.45/km

## Calculated Fields (Not Shown to User)

The following are calculated automatically and should NOT be shown as inputs:
- Return trip distance (distance × 2)
- All costs besides energy and capital
- One way trip energy
- Battery charging time
- One way travel time
- Annual km
- Lifetime km
- Annual litres diesel/kWh per truck
- Cost of energy per truck per year
- Total charging infrastructure cost

## Next Steps

1. ✅ Update TCOInputForm component to use new structure
2. ✅ Update TCOResults component to display all 4 electric truck types
3. ✅ Test calculations against Excel spreadsheet for accuracy
4. Update documentation with new parameters

## Accuracy Notes

All formulas have been verified against the Excel model:
- Cell references match exactly
- Formula logic is identical
- Default values are from the Excel "Inputs" sheet (yellow cells)
- Calculated values (green cells) are computed, not shown as inputs
