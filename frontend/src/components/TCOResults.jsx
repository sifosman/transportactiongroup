import React, { useState, useEffect } from 'react';
import { Download, RefreshCw, Save, TrendingDown, TrendingUp, Leaf, BarChart3, DollarSign, Calendar, Fuel, Zap, Battery, BatteryCharging, Repeat, Globe, Flag, Award, TrendingDown as ArrowDown, TrendingUp as ArrowUp, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function TCOResults({ results, inputs, onSave, onReset, onRecalculate, onInputChange }) {
  const [saveName, setSaveName] = useState('');
  const [saveNotes, setSaveNotes] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [showAdjustments, setShowAdjustments] = useState(false);
  const [liveInputs, setLiveInputs] = useState(inputs);
  
  // Update live inputs when props change
  useEffect(() => {
    setLiveInputs(inputs);
  }, [inputs]);

  const { diesel, electric, comparisons, breakEven, environmental, currencySymbol } = results;

  // Format currency
  const formatCurrency = (value) => {
    return `${currencySymbol}${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  // Format number with 2 decimals
  const formatNumber = (value) => {
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Chart colors
  const COLORS = {
    diesel: '#ef4444',
    electric: '#10b981',
    euro: '#f59e0b',
    chinese: '#8b5cf6'
  };

  // Truck type configurations with icons and visual styling
  const truckTypes = {
    diesel: {
      euro: { 
        icon: Fuel, 
        label: 'Euro Diesel', 
        color: 'text-orange-600', 
        bgColor: 'bg-orange-50', 
        borderColor: 'border-orange-200',
        badge: { text: '🇪🇺 European', color: 'bg-blue-100 text-blue-800' }
      },
      chinese: { 
        icon: Fuel, 
        label: 'Chinese Diesel', 
        color: 'text-purple-600', 
        bgColor: 'bg-purple-50', 
        borderColor: 'border-purple-200',
        badge: { text: '🇨🇳 Chinese', color: 'bg-purple-100 text-purple-800' }
      }
    },
    electric: {
      europeanEV: { 
        icon: Zap, 
        label: 'European EV', 
        color: 'text-green-600', 
        bgColor: 'bg-green-50', 
        borderColor: 'border-green-200',
        badge: { text: '🇪🇺 European • Charged', color: 'bg-green-100 text-green-800' }
      },
      chineseEVCharged: { 
        icon: BatteryCharging, 
        label: 'Chinese EV', 
        color: 'text-emerald-600', 
        bgColor: 'bg-emerald-50', 
        borderColor: 'border-emerald-200',
        badge: { text: '🇨🇳 Chinese • Charged', color: 'bg-emerald-100 text-emerald-800' }
      },
      chineseEVSwapped: { 
        icon: Repeat, 
        label: 'Chinese EV', 
        color: 'text-teal-600', 
        bgColor: 'bg-teal-50', 
        borderColor: 'border-teal-200',
        badge: { text: '🇨🇳 Chinese • Swapped', color: 'bg-teal-100 text-teal-800' }
      },
      chineseEVBaaS: { 
        icon: Battery, 
        label: 'Chinese EV', 
        color: 'text-cyan-600', 
        bgColor: 'bg-cyan-50', 
        borderColor: 'border-cyan-200',
        badge: { text: '🇨🇳 Chinese • BaaS', color: 'bg-cyan-100 text-cyan-800' }
      }
    }
  };

  // Prepare chart data
  const costBreakdownData = [
    {
      name: 'Energy Cost',
      Diesel: diesel.euro.energyCostPerKm,
      Electric: electric.europeanEV.energyCostPerKm
    },
    {
      name: 'Capital Cost',
      Diesel: diesel.euro.capitalCostPerKm,
      Electric: electric.europeanEV.capitalCostPerKm
    },
    {
      name: 'Other Costs',
      Diesel: diesel.euro.otherCostsPerKm,
      Electric: electric.europeanEV.otherCostsPerKm
    }
  ];

  const annualCostComparison = [
    {
      name: 'Euro Diesel',
      value: diesel.euro.annualCostFinancePeriod,
      fill: COLORS.euro
    },
    {
      name: 'Chinese Diesel',
      value: diesel.chinese.annualCostFinancePeriod,
      fill: COLORS.chinese
    },
    {
      name: 'European EV',
      value: electric.europeanEV.annualCostFinancePeriod,
      fill: COLORS.electric
    },
    {
      name: 'Chinese EV Charged',
      value: electric.chineseEVCharged.annualCostFinancePeriod,
      fill: '#059669'
    },
    {
      name: 'Chinese EV Swapped',
      value: electric.chineseEVSwapped.annualCostFinancePeriod,
      fill: '#0d9488'
    },
    {
      name: 'Chinese EV BaaS',
      value: electric.chineseEVBaaS.annualCostFinancePeriod,
      fill: '#14b8a6'
    }
  ];

  // 10-year projection data
  const yearlyProjection = Array.from({ length: 10 }, (_, i) => {
    const year = i + 1;
    const euroDieselAnnual = year <= inputs.euroDiesel?.loanTerm 
      ? diesel.euro.annualCostFinancePeriod 
      : diesel.euro.annualCostPostFinance;
    const europeanEVAnnual = year <= inputs.europeanEV?.loanTerm 
      ? electric.europeanEV.annualCostFinancePeriod 
      : electric.europeanEV.annualCostPostFinance;
    
    return {
      year: `Year ${year}`,
      'Euro Diesel': euroDieselAnnual,
      'European EV': europeanEVAnnual,
      'Chinese EV Charged': year <= inputs.chineseEVCharged?.loanTerm 
        ? electric.chineseEVCharged.annualCostFinancePeriod 
        : electric.chineseEVCharged.annualCostPostFinance,
      'Chinese EV Swapped': year <= inputs.chineseEVSwapped?.loanTerm 
        ? electric.chineseEVSwapped.annualCostFinancePeriod 
        : electric.chineseEVSwapped.annualCostPostFinance
    };
  });

  // Handle save
  const handleSave = () => {
    onSave(saveName || 'Untitled Calculation', saveNotes);
    setSaveDialogOpen(false);
    setSaveName('');
    setSaveNotes('');
  };

  // Print/Export functionality
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header with Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <CardTitle className="text-2xl">TCO Analysis Results</CardTitle>
              <CardDescription className="mt-1">
                {results.corridorName} • {new Date(results.timestamp).toLocaleDateString()}
              </CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto flex-wrap">
              <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Calculation</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <Label>Name</Label>
                      <Input
                        value={saveName}
                        onChange={(e) => setSaveName(e.target.value)}
                        placeholder="e.g., N3 Corridor - Fleet Analysis"
                      />
                    </div>
                    <div>
                      <Label>Notes (Optional)</Label>
                      <Input
                        value={saveNotes}
                        onChange={(e) => setSaveNotes(e.target.value)}
                        placeholder="Add any notes..."
                      />
                    </div>
                    <Button onClick={handleSave} className="w-full">Save Calculation</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" onClick={handlePrint} className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Print/PDF
              </Button>
              <Button 
                variant={showAdjustments ? "default" : "outline"} 
                onClick={() => setShowAdjustments(!showAdjustments)} 
                className="w-full sm:w-auto"
              >
                <Settings className="w-4 h-4 mr-2" />
                {showAdjustments ? 'Hide' : 'Quick'} Adjustments
              </Button>
              <Button variant="outline" onClick={onRecalculate} className="w-full sm:w-auto">
                <RefreshCw className="w-4 h-4 mr-2" />
                Full Input Form
              </Button>
              <Button variant="destructive" onClick={onReset} className="w-full sm:w-auto">
                New Calculation
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Findings Summary */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-green-600" />
              <CardTitle className="text-sm font-medium text-gray-600">Lifetime Savings</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-700">
                  {formatCurrency(comparisons.vsEuro.lifetimeCosts.savings)}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {formatNumber(comparisons.vsEuro.lifetimeCosts.savingsPercent)}% vs Euro Diesel
                </p>
              </div>
              <Award className="w-10 h-10 text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-sm font-medium text-gray-600">Break-Even Period</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-700">
                  {breakEven.years ? `${formatNumber(breakEven.years)} years` : 'N/A'}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {breakEven.years ? `${Math.round(breakEven.months)} months` : breakEven.message}
                </p>
              </div>
              <BarChart3 className="w-10 h-10 text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-purple-600" />
              <CardTitle className="text-sm font-medium text-gray-600">Cost per KM</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-700">
                  {formatCurrency(electric.europeanEV.totalCostPerKmLoanPeriod)}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Electric vs {formatCurrency(diesel.euro.totalCostPerKmLoanPeriod)} Diesel
                </p>
              </div>
              <Zap className="w-10 h-10 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <CardTitle className="text-sm font-medium text-gray-600">CO₂ Reduction</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-emerald-700">
                  {formatNumber(environmental.lifetime.reductionPercent)}%
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {formatNumber(environmental.lifetime.reduction / 1000)} tons over lifetime
                </p>
              </div>
              <Globe className="w-10 h-10 text-emerald-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Winner/Best Options Section */}
      <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />
            Best Value Options
          </CardTitle>
          <CardDescription>Most cost-effective trucks based on your analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Lowest Cost per KM */}
            {(() => {
              const allTrucks = [
                { type: 'Euro Diesel', cost: diesel.euro.totalCostPerKmLoanPeriod, icon: Fuel, color: 'orange' },
                { type: 'Chinese Diesel', cost: diesel.chinese.totalCostPerKmLoanPeriod, icon: Fuel, color: 'purple' },
                { type: 'European EV', cost: electric.europeanEV.totalCostPerKmLoanPeriod, icon: Zap, color: 'green' },
                { type: 'Chinese EV (Charged)', cost: electric.chineseEVCharged.totalCostPerKmLoanPeriod, icon: BatteryCharging, color: 'emerald' },
                { type: 'Chinese EV (Swapped)', cost: electric.chineseEVSwapped.totalCostPerKmLoanPeriod, icon: Repeat, color: 'teal' },
                { type: 'Chinese EV (BaaS)', cost: electric.chineseEVBaaS.totalCostPerKmLoanPeriod, icon: Battery, color: 'cyan' }
              ];
              const lowestCost = allTrucks.reduce((min, truck) => truck.cost < min.cost ? truck : min);
              const Icon = lowestCost.icon;
              return (
                <div className={`p-4 bg-${lowestCost.color}-100 border-2 border-${lowestCost.color}-300 rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 text-${lowestCost.color}-600`} />
                    <h3 className="font-bold text-lg">Lowest Cost/km</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{lowestCost.type}</p>
                  <p className="text-sm text-gray-600 mt-1">{formatCurrency(lowestCost.cost)}/km</p>
                </div>
              );
            })()}
            
            {/* Lowest Lifetime Cost */}
            {(() => {
              const allTrucks = [
                { type: 'Euro Diesel', cost: diesel.euro.lifetimeCost, icon: Fuel, color: 'orange' },
                { type: 'Chinese Diesel', cost: diesel.chinese.lifetimeCost, icon: Fuel, color: 'purple' },
                { type: 'European EV', cost: electric.europeanEV.lifetimeCost, icon: Zap, color: 'green' },
                { type: 'Chinese EV (Charged)', cost: electric.chineseEVCharged.lifetimeCost, icon: BatteryCharging, color: 'emerald' },
                { type: 'Chinese EV (Swapped)', cost: electric.chineseEVSwapped.lifetimeCost, icon: Repeat, color: 'teal' },
                { type: 'Chinese EV (BaaS)', cost: electric.chineseEVBaaS.lifetimeCost, icon: Battery, color: 'cyan' }
              ];
              const lowestLifetime = allTrucks.reduce((min, truck) => truck.cost < min.cost ? truck : min);
              const Icon = lowestLifetime.icon;
              return (
                <div className={`p-4 bg-${lowestLifetime.color}-100 border-2 border-${lowestLifetime.color}-300 rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 text-${lowestLifetime.color}-600`} />
                    <h3 className="font-bold text-lg">Best Lifetime Value</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{lowestLifetime.type}</p>
                  <p className="text-sm text-gray-600 mt-1">{formatCurrency(lowestLifetime.cost)} total</p>
                </div>
              );
            })()}
            
            {/* Most Eco-Friendly */}
            <div className="p-4 bg-emerald-100 border-2 border-emerald-300 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-lg">Most Eco-Friendly</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">All Electric Options</p>
              <p className="text-sm text-gray-600 mt-1">0 kg CO₂ emissions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Adjustment Panel */}
      {showAdjustments && (
        <Card className="border-2 border-blue-300 bg-blue-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                <CardTitle>Quick Adjustments</CardTitle>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAdjustments(false)}
              >
                Close
              </Button>
            </div>
            <CardDescription>Adjust key parameters and see results update instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Diesel Price */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Fuel className="w-4 h-4" />
                  Diesel Price ({liveInputs.currencySymbol}/L)
                </Label>
                <Input
                  type="number"
                  step="0.1"
                  value={liveInputs.euroDiesel?.fuelPrice || 18}
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value) || 0;
                    const updated = {
                      ...liveInputs,
                      euroDiesel: { ...liveInputs.euroDiesel, fuelPrice: newValue, price: newValue },
                      chineseDiesel: { ...liveInputs.chineseDiesel, fuelPrice: newValue, price: newValue }
                    };
                    setLiveInputs(updated);
                    if (onInputChange) onInputChange(updated);
                  }}
                  className="w-full"
                />
              </div>

              {/* Electricity Price */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Electricity Price ({liveInputs.currencySymbol}/kWh)
                </Label>
                <Input
                  type="number"
                  step="0.1"
                  value={liveInputs.europeanEV?.electricityPrice || 2.75}
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value) || 0;
                    const updated = {
                      ...liveInputs,
                      europeanEV: { ...liveInputs.europeanEV, electricityPrice: newValue, price: newValue },
                      chineseEVCharged: { ...liveInputs.chineseEVCharged, electricityPrice: newValue, price: newValue },
                      chineseEVSwapped: { ...liveInputs.chineseEVSwapped, electricityPrice: newValue, price: newValue },
                      chineseEVBaaS: { ...liveInputs.chineseEVBaaS, electricityPrice: newValue, price: newValue }
                    };
                    setLiveInputs(updated);
                    if (onInputChange) onInputChange(updated);
                  }}
                  className="w-full"
                />
              </div>

              {/* Distance */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Distance One-Way (km)
                </Label>
                <Input
                  type="number"
                  step="10"
                  value={liveInputs.distanceOneWay || 600}
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value) || 0;
                    const updated = {
                      ...liveInputs,
                      distanceOneWay: newValue,
                      returnTripDistance: newValue * 2
                    };
                    setLiveInputs(updated);
                    if (onInputChange) onInputChange(updated);
                  }}
                  className="w-full"
                />
              </div>

              {/* Euro Diesel Purchase Price */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Euro Diesel Price ({liveInputs.currencySymbol})
                </Label>
                <Input
                  type="number"
                  step="10000"
                  value={liveInputs.euroDiesel?.purchasePrice || 2200000}
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value) || 0;
                    const updated = {
                      ...liveInputs,
                      euroDiesel: { ...liveInputs.euroDiesel, purchasePrice: newValue }
                    };
                    setLiveInputs(updated);
                    if (onInputChange) onInputChange(updated);
                  }}
                  className="w-full"
                />
              </div>

              {/* European EV Purchase Price */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  European EV Price ({liveInputs.currencySymbol})
                </Label>
                <Input
                  type="number"
                  step="10000"
                  value={liveInputs.europeanEV?.purchasePrice || 6500000}
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value) || 0;
                    const updated = {
                      ...liveInputs,
                      europeanEV: { ...liveInputs.europeanEV, purchasePrice: newValue },
                      electricCharged: { ...liveInputs.electricCharged, purchasePrice: newValue }
                    };
                    setLiveInputs(updated);
                    if (onInputChange) onInputChange(updated);
                  }}
                  className="w-full"
                />
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Interest Rate (%)
                </Label>
                <Input
                  type="number"
                  step="0.1"
                  value={(liveInputs.interestRate || 0.105) * 100}
                  onChange={(e) => {
                    const newValue = parseFloat(e.target.value) / 100 || 0;
                    const updated = {
                      ...liveInputs,
                      interestRate: newValue,
                      euroDiesel: { ...liveInputs.euroDiesel, interestRate: newValue },
                      chineseDiesel: { ...liveInputs.chineseDiesel, interestRate: newValue },
                      europeanEV: { ...liveInputs.europeanEV, interestRate: newValue },
                      chineseEVCharged: { ...liveInputs.chineseEVCharged, interestRate: newValue },
                      chineseEVSwapped: { ...liveInputs.chineseEVSwapped, interestRate: newValue },
                      chineseEVBaaS: { ...liveInputs.chineseEVBaaS, interestRate: newValue }
                    };
                    setLiveInputs(updated);
                    if (onInputChange) onInputChange(updated);
                  }}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Detailed Results Tabs */}
      <Tabs defaultValue="breakdown" className="space-y-4">
        <TabsList className="w-full overflow-x-auto whitespace-nowrap flex md:grid md:grid-cols-4">
          <TabsTrigger value="comparison">Cost Comparison</TabsTrigger>
          <TabsTrigger value="breakdown">Detailed Breakdown</TabsTrigger>
          <TabsTrigger value="environmental">Environmental Impact</TabsTrigger>
          <TabsTrigger value="projection">10-Year Projection</TabsTrigger>
        </TabsList>

        {/* Cost Comparison Tab */}
        <TabsContent value="comparison">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost per Kilometer Breakdown</CardTitle>
                <CardDescription>Comparison of cost components between diesel and electric</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costBreakdownData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Legend />
                    <Bar dataKey="Diesel" fill={COLORS.diesel} />
                    <Bar dataKey="Electric" fill={COLORS.electric} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annual Cost Comparison</CardTitle>
                <CardDescription>First year operational costs</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={annualCostComparison} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={150} />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Bar dataKey="value" fill="#8884d8">
                      {annualCostComparison.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Detailed Breakdown Tab */}
        <TabsContent value="breakdown">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fuel className="w-5 h-5 text-red-600" />
                  Diesel Trucks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className={`p-4 ${truckTypes.diesel.euro.bgColor} rounded-lg border-2 ${truckTypes.diesel.euro.borderColor}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Fuel className={`w-5 h-5 ${truckTypes.diesel.euro.color}`} />
                        <h4 className="font-semibold text-lg">{truckTypes.diesel.euro.label}</h4>
                      </div>
                      <Badge className={truckTypes.diesel.euro.badge.color}>{truckTypes.diesel.euro.badge.text}</Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Energy Cost/km:</span>
                        <span className="font-medium">{formatCurrency(diesel.euro.energyCostPerKm)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capital Cost/km:</span>
                        <span className="font-medium">{formatCurrency(diesel.euro.capitalCostPerKm)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Other Costs/km:</span>
                        <span className="font-medium">{formatCurrency(diesel.euro.otherCostsPerKm)}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Total Cost/km:</span>
                        <span>{formatCurrency(diesel.euro.totalCostPerKmLoanPeriod)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Cost:</span>
                        <span className="font-medium">{formatCurrency(diesel.euro.annualCostFinancePeriod)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lifetime Cost:</span>
                        <span className="font-medium">{formatCurrency(diesel.euro.lifetimeCost)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-4 ${truckTypes.diesel.chinese.bgColor} rounded-lg border-2 ${truckTypes.diesel.chinese.borderColor}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Fuel className={`w-5 h-5 ${truckTypes.diesel.chinese.color}`} />
                        <h4 className="font-semibold text-lg">{truckTypes.diesel.chinese.label}</h4>
                      </div>
                      <Badge className={truckTypes.diesel.chinese.badge.color}>{truckTypes.diesel.chinese.badge.text}</Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Total Cost/km:</span>
                        <span className="font-medium">{formatCurrency(diesel.chinese.totalCostPerKmLoanPeriod)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Cost:</span>
                        <span className="font-medium">{formatCurrency(diesel.chinese.annualCostFinancePeriod)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lifetime Cost:</span>
                        <span className="font-medium">{formatCurrency(diesel.chinese.lifetimeCost)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Electric Trucks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(truckTypes.electric).map(([key, config]) => {
                    const data = electric[key];
                    if (!data) return null;
                    const Icon = config.icon;
                    return (
                      <div key={key} className={`p-4 ${config.bgColor} rounded-lg border-2 ${config.borderColor}`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-5 h-5 ${config.color}`} />
                            <h4 className="font-semibold text-lg">{config.label}</h4>
                          </div>
                          <Badge className={config.badge.color}>{config.badge.text}</Badge>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Energy Cost/km:</span>
                            <span className="font-medium">{formatCurrency(data.energyCostPerKm)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Capital Cost/km:</span>
                            <span className="font-medium">{formatCurrency(data.capitalCostPerKm)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Other Costs/km:</span>
                            <span className="font-medium">{formatCurrency(data.otherCostsPerKm)}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-bold">
                            <span>Total Cost/km:</span>
                            <span>{formatCurrency(data.totalCostPerKmLoanPeriod)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Annual Cost:</span>
                            <span className="font-medium">{formatCurrency(data.annualCostFinancePeriod)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lifetime Cost:</span>
                            <span className="font-medium">{formatCurrency(data.lifetimeCost)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Environmental Impact Tab */}
        <TabsContent value="environmental">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Environmental Impact Analysis
              </CardTitle>
              <CardDescription>CO₂ emissions comparison over truck lifetime</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-4">Diesel Emissions</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">Per km:</p>
                      <p className="text-xl font-bold text-red-700">{formatNumber(environmental.perKm.diesel)} kg CO₂</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Annual:</p>
                      <p className="text-lg font-semibold text-red-700">{formatNumber(environmental.annual.diesel / 1000)} tons</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Lifetime:</p>
                      <p className="text-lg font-semibold text-red-700">{formatNumber(environmental.lifetime.diesel / 1000)} tons</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-4">Electric Emissions</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">Per km:</p>
                      <p className="text-xl font-bold text-green-700">{formatNumber(environmental.perKm.electric)} kg CO₂</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Annual:</p>
                      <p className="text-lg font-semibold text-green-700">{formatNumber(environmental.annual.electric / 1000)} tons</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Lifetime:</p>
                      <p className="text-lg font-semibold text-green-700">{formatNumber(environmental.lifetime.electric / 1000)} tons</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-4">Reduction</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">Per km:</p>
                      <p className="text-xl font-bold text-blue-700">{formatNumber(environmental.perKm.reductionPercent)}%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Annual:</p>
                      <p className="text-lg font-semibold text-blue-700">{formatNumber(environmental.annual.reduction / 1000)} tons</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Lifetime:</p>
                      <p className="text-lg font-semibold text-blue-700">{formatNumber(environmental.lifetime.reduction / 1000)} tons</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 10-Year Projection Tab */}
        <TabsContent value="projection">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                10-Year Cost Projection
              </CardTitle>
              <CardDescription>Annual costs over the expected lifespan</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={yearlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Line type="monotone" dataKey="Diesel" stroke={COLORS.diesel} strokeWidth={2} />
                  <Line type="monotone" dataKey="Electric" stroke={COLORS.electric} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Costs decrease after year {inputs.loanTerm} when loan payments are completed. 
                  Electric trucks show {comparisons.vsEuro.lifetimeCosts.savings > 0 ? 'significant' : 'minimal'} savings over the {inputs.truckLifespan}-year period.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
