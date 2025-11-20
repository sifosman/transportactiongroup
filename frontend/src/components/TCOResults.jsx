import React, { useState } from 'react';
import { Download, RefreshCw, Save, TrendingDown, TrendingUp, Leaf, BarChart3, DollarSign, Calendar } from 'lucide-react';
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

export default function TCOResults({ results, inputs, onSave, onReset, onRecalculate }) {
  const [saveName, setSaveName] = useState('');
  const [saveNotes, setSaveNotes] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

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
              <Button variant="outline" onClick={onRecalculate} className="w-full sm:w-auto">
                <RefreshCw className="w-4 h-4 mr-2" />
                Adjust Inputs
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
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Lifetime Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">
              {formatCurrency(comparisons.vsEuro.lifetimeCosts.savings)}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {formatNumber(comparisons.vsEuro.lifetimeCosts.savingsPercent)}% vs Euro Diesel
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Break-Even Period</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">
              {breakEven.years ? `${formatNumber(breakEven.years)} years` : 'N/A'}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {breakEven.years ? `${Math.round(breakEven.months)} months` : breakEven.message}
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Cost per KM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">
              {formatCurrency(electric.europeanEV.totalCostPerKmLoanPeriod)}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Electric vs {formatCurrency(diesel.euro.totalCostPerKmLoanPeriod)} Diesel
            </p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">CO₂ Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-700">
              {formatNumber(environmental.lifetime.reductionPercent)}%
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {formatNumber(environmental.lifetime.reduction / 1000)} tons over lifetime
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Results Tabs */}
      <Tabs defaultValue="comparison" className="space-y-4">
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
                  <DollarSign className="w-5 h-5 text-red-600" />
                  Diesel Trucks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Euro Diesel</h4>
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
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Chinese Diesel</h4>
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
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Electric Trucks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { key: 'europeanEV', label: 'European EV' },
                    { key: 'chineseEVCharged', label: 'Chinese EV (Charged)' },
                    { key: 'chineseEVSwapped', label: 'Chinese EV (Swapped)' },
                    { key: 'chineseEVBaaS', label: 'Chinese EV (BaaS)' }
                  ].map(({ key, label }) => {
                    const data = electric[key];
                    if (!data) return null;
                    return (
                      <div key={key} className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold mb-2">{label}</h4>
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
