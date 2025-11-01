# Electric Truck TCO Calculator - Implementation Guide

## Overview
A comprehensive Total Cost of Ownership (TCO) calculator for comparing diesel vs electric trucks across African freight corridors. This tool helps fleet operators, cargo owners, and decision-makers evaluate the financial and environmental impact of transitioning to electric trucks.

## Features Implemented

### 1. **Multi-Corridor Support**
- **South Africa**: N3 Corridor (Durban to Johannesburg) - 600 km - ZAR
- **Kenya**: Mombasa to Nairobi - 480 km - KES
- **Tanzania**: Central Corridor (Dar es Salaam to Kampala) - 1,420 km - TZS
- **Ethiopia**: Addis Ababa to Djibouti - 950 km - ETB

### 2. **Comprehensive Calculations**
- **Diesel Trucks**: Euro Diesel and Chinese Diesel variants
- **Electric Trucks**: 
  - Depot Charged (slower charging, fewer trips)
  - Battery Swapped (maintains diesel trip schedule)
  - Battery as a Service (lower upfront cost with subscription)

### 3. **Financial Analysis**
- Energy cost per kilometer
- Capital cost per kilometer (including financing)
- Other operational costs (maintenance, insurance, tolls, drivers)
- 10-year lifetime cost projection
- Break-even analysis
- Annual cost comparisons

### 4. **Environmental Impact**
- CO₂ emissions per kilometer
- Annual emissions comparison
- Lifetime emissions reduction
- Percentage reduction metrics

### 5. **User Experience**
- **Step 1**: Corridor selection with regional defaults
- **Step 2**: User-friendly input forms with tabbed interface
- **Step 3**: Detailed results with interactive charts
- Save and load previous calculations
- Export/Print functionality for reports

## File Structure

```
frontend/src/
├── components/
│   ├── TCOCalculator.jsx          # Main calculator component
│   ├── TCOInputForm.jsx            # Input form with tabs
│   ├── TCOResults.jsx              # Results visualization
│   └── ui/                         # Shadcn UI components
├── utils/
│   └── tcoCalculations.js          # Core calculation engine
└── App.jsx                          # Main app with routing
```

## How to Use

### For End Users

1. **Access the Calculator**
   - Click "TCO Calculator" in the navigation menu
   - Or click "Launch TCO Calculator" on the homepage

2. **Select Your Corridor**
   - Choose from 4 African freight corridors
   - Each corridor has pre-filled regional defaults

3. **Configure Parameters** (4 Tabs)
   - **Corridor & Finance**: Distance, exchange rates, interest rates, loan terms
   - **Diesel Trucks**: Purchase prices, fuel consumption, fuel prices
   - **Electric Trucks**: Purchase prices, energy consumption, electricity prices
   - **Review & Calculate**: Summary of all inputs before calculation

4. **View Results** (4 Tabs)
   - **Cost Comparison**: Visual charts comparing diesel vs electric
   - **Detailed Breakdown**: Complete cost analysis for all truck types
   - **Environmental Impact**: CO₂ emissions comparison
   - **10-Year Projection**: Annual costs over truck lifetime

5. **Save & Export**
   - Save calculations with custom names and notes
   - Access previous calculations from history
   - Print or export to PDF

### For Developers

#### Running the Application

```bash
cd frontend
npm install  # or pnpm install
npm run dev  # Start development server
```

#### Key Components

**TCOCalculator.jsx** - Main orchestrator
- Manages workflow (corridor → inputs → results)
- Handles calculation state
- Manages saved calculations in localStorage

**TCOInputForm.jsx** - Input collection
- Tabbed interface for organized data entry
- Real-time input validation
- Responsive number inputs with proper labels

**TCOResults.jsx** - Results display
- Interactive charts using Recharts
- Multiple comparison views
- Export and save functionality

**tcoCalculations.js** - Calculation engine
```javascript
// Key functions:
- getDefaultInputs(corridor)        // Get regional defaults
- calculateDieselAnalysis(inputs)   // Diesel TCO calculations
- calculateElectricAnalysis(inputs) // Electric TCO calculations
- generateComparison(diesel, electric) // Side-by-side comparison
- calculateBreakEven(...)           // Break-even analysis
- calculateEnvironmentalImpact(...) // CO₂ emissions
```

## Calculation Methodology

Based on the Excel TCO model provided, the calculator computes:

### 1. Energy Cost
- **Diesel**: `(1 / km_per_liter) × diesel_price_per_liter × annual_km`
- **Electric**: `kWh_per_km × electricity_price_per_kWh × annual_km`

### 2. Capital Cost
- Purchase price minus present value of residual value
- Financed over loan term at specified interest rate
- Annual loan payment using standard amortization formula

### 3. Operating Costs
- Maintenance, insurance, tolls, driver wages
- Configured as cost per kilometer

### 4. Total Cost of Ownership
- Sum of all costs over truck lifetime
- Accounts for loan period vs post-loan period
- Includes residual value at end of life

## Default Parameters

### Financial (All Corridors)
- Interest Rate: 10.5% annual
- Loan Term: 5 years
- Truck Lifespan: 10 years
- Residual Value: 25% of purchase price
- Other Costs: 6 ZAR/km (adjustable)

### South Africa (N3 Corridor) Example
- **Euro Diesel**: R2.2M purchase, 2.5 km/L, R18/L fuel
- **Chinese Diesel**: R1.4M purchase, 2.3 km/L, R18/L fuel
- **Electric Charged**: R4.5M purchase, 1.35 kWh/km, R2.5/kWh
- **Electric Swapped**: R4.5M purchase, 1.35 kWh/km, R2.5/kWh
- **Electric BaaS**: R2.5M purchase + R2M battery service, 1.35 kWh/km, R2.5/kWh

## User Interface Highlights

### Design Principles
- **Progressive Disclosure**: Users see one step at a time
- **Clear Progress**: Visual indicators show current step
- **Smart Defaults**: Pre-filled regional data reduces friction
- **Visual Feedback**: Charts and graphs for easy comprehension
- **Accessibility**: Large touch targets, clear labels, proper contrast

### Responsive Design
- Mobile-friendly layouts
- Adaptive charts and tables
- Touch-optimized controls

## Data Persistence

- Calculations saved to `localStorage`
- Key: `tco_calculations`
- Format: Array of calculation objects with inputs, results, and metadata

## Future Enhancements (Optional)

1. **Authentication Integration**
   - Link to existing Moodle SSO
   - User-specific calculation history
   - Cloud synchronization

2. **Advanced Features**
   - Fleet-level analysis (multiple trucks)
   - Custom financing options
   - Sensitivity analysis
   - What-if scenarios

3. **Data Export**
   - CSV export for spreadsheet analysis
   - Detailed PDF reports with branding
   - Email sharing functionality

4. **Regional Expansion**
   - Port and urban logistics scenarios
   - Additional African corridors
   - Custom corridor creation

## Testing Checklist

- [ ] Corridor selection works for all 4 regions
- [ ] Input forms validate numeric inputs
- [ ] Calculations produce accurate results
- [ ] Charts render correctly
- [ ] Save/load functionality works
- [ ] Print/PDF export functions
- [ ] Responsive design on mobile
- [ ] Navigation between sections
- [ ] Back button returns to inputs
- [ ] Reset clears all data

## Troubleshooting

**Issue**: Calculations seem incorrect
- **Solution**: Verify input values match expected ranges
- Check that consumption rates are in correct units (km/L for diesel, kWh/km for electric)

**Issue**: Charts not displaying
- **Solution**: Ensure recharts library is installed (`npm install recharts`)
- Check browser console for errors

**Issue**: Saved calculations not persisting
- **Solution**: Check browser localStorage is enabled
- Clear cache and try again

## Support

For questions or issues:
- Email: transportactiongroup@gmail.com
- Review the developer brief: `LMS_TCO_Tool_Developer_Brief.md`
- Check calculation examples in CSV files

## Credits

Developed based on:
- Excel TCO Model: South Africa N3 Corridor analysis
- Developer Brief: TAG LMS Integration specifications
- Regional data for Ethiopia, Kenya, Tanzania, and South Africa

---

**Version**: 1.0
**Last Updated**: November 2024
**Status**: Ready for production deployment
