import React, { useState } from 'react';
import { ArrowLeft, Calculator, Info, DollarSign, Truck, Zap, TrendingUp, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export default function TCOInputForm({ initialInputs, onCalculate, onBack }) {
  const [inputs, setInputs] = useState(initialInputs);
  const [activeTab, setActiveTab] = useState('corridor');

  // Update input value
  const updateValue = (category, field, value) => {
    setInputs(prev => {
      if (category) {
        return {
          ...prev,
          [category]: {
            ...prev[category],
            [field]: parseFloat(value) || 0
          }
        };
      }
      return {
        ...prev,
        [field]: parseFloat(value) || 0
      };
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(inputs);
  };

  // Number input component
  const NumberInput = ({ label, value, onChange, prefix, suffix, helpText, step = 'any' }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex items-center gap-2">
        {prefix && <span className="text-sm text-gray-600">{prefix}</span>}
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          step={step}
          className="flex-1"
        />
        {suffix && <span className="text-sm text-gray-600">{suffix}</span>}
      </div>
      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-3 md:p-6">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <Card className="mb-4 border-0 shadow-none">
          <CardHeader>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Configure Your Parameters
                </CardTitle>
                <CardDescription className="mt-1">
                  {inputs.corridorName} • Currency: {inputs.currencySymbol} ({inputs.currency})
                </CardDescription>
              </div>
              <Button type="button" variant="outline" onClick={onBack} className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Default values are pre-filled based on regional data. You can adjust any parameter to match your specific operation.
            All values marked with <span className="text-yellow-600 font-semibold">*</span> are editable.
          </AlertDescription>
        </Alert>

        {/* Input Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="w-full sticky top-4 z-10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 overflow-x-auto whitespace-nowrap flex md:grid md:grid-cols-4">
            <TabsTrigger className="px-3 py-2 text-sm" value="corridor">Corridor & Finance</TabsTrigger>
            <TabsTrigger className="px-3 py-2 text-sm" value="diesel">Diesel Trucks</TabsTrigger>
            <TabsTrigger className="px-3 py-2 text-sm" value="electric">Electric Trucks</TabsTrigger>
            <TabsTrigger className="px-3 py-2 text-sm" value="review">Review & Calculate</TabsTrigger>
          </TabsList>

          {/* Corridor & Financial Parameters */}
          <TabsContent value="corridor">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Corridor Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <NumberInput
                    label="Distance One Way (km) *"
                    value={inputs.distanceOneWay}
                    onChange={(v) => {
                      setInputs(prev => ({
                        ...prev,
                        distanceOneWay: parseFloat(v) || 0,
                        returnTripDistance: (parseFloat(v) || 0) * 2
                      }));
                    }}
                    helpText="Distance from origin to destination"
                  />
                  <NumberInput
                    label="Return Trip Distance (km)"
                    value={inputs.returnTripDistance}
                    onChange={() => {}}
                    helpText="Automatically calculated (one way × 2)"
                  />
                  <NumberInput
                    label="Exchange Rate *"
                    value={inputs.exchangeRate}
                    onChange={(v) => updateValue(null, 'exchangeRate', v)}
                    prefix="USD 1 ="
                    suffix={inputs.currency}
                    helpText="Current USD exchange rate"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Financial Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <NumberInput
                    label="Interest Rate (Annual) *"
                    value={inputs.interestRate * 100}
                    onChange={(v) => updateValue(null, 'interestRate', parseFloat(v) / 100)}
                    suffix="%"
                    helpText="Annual interest rate for truck financing"
                    step="0.1"
                  />
                  <NumberInput
                    label="Loan Term *"
                    value={inputs.loanTerm}
                    onChange={(v) => updateValue(null, 'loanTerm', v)}
                    suffix="years"
                    helpText="Number of years to finance the truck"
                  />
                  <NumberInput
                    label="Truck Lifespan *"
                    value={inputs.truckLifespan}
                    onChange={(v) => updateValue(null, 'truckLifespan', v)}
                    suffix="years"
                    helpText="Expected operational lifespan of truck"
                  />
                  <NumberInput
                    label="Residual Value *"
                    value={inputs.residualValuePercent * 100}
                    onChange={(v) => updateValue(null, 'residualValuePercent', parseFloat(v) / 100)}
                    suffix="%"
                    helpText="Truck value at end of lifespan"
                    step="0.1"
                  />
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Operating Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <NumberInput
                    label="Other Costs per Km *"
                    value={inputs.otherCostsPerKm}
                    onChange={(v) => updateValue(null, 'otherCostsPerKm', v)}
                    prefix={inputs.currencySymbol}
                    helpText="Maintenance, insurance, tolls, driver costs, etc."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Diesel Trucks Parameters */}
          <TabsContent value="diesel">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-gray-700" />
                    Diesel Truck Options
                  </CardTitle>
                  <CardDescription>
                    Configure parameters for both Euro and Chinese diesel trucks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="euro">
                    {/* Euro Diesel */}
                    <AccordionItem value="euro">
                      <AccordionTrigger className="text-lg font-semibold">
                        Euro Diesel Truck
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-3 pt-4">
                          <NumberInput
                            label="Purchase Price *"
                            value={inputs.euroDiesel.purchasePrice}
                            onChange={(v) => updateValue('euroDiesel', 'purchasePrice', v)}
                            prefix={inputs.currencySymbol}
                          />
                          <NumberInput
                            label="Fuel Consumption *"
                            value={inputs.euroDiesel.consumption}
                            onChange={(v) => updateValue('euroDiesel', 'consumption', v)}
                            suffix="km/liter"
                            helpText="Distance traveled per liter of diesel"
                            step="0.1"
                          />
                          <NumberInput
                            label="Diesel Price *"
                            value={inputs.euroDiesel.price}
                            onChange={(v) => updateValue('euroDiesel', 'price', v)}
                            prefix={inputs.currencySymbol}
                            suffix="/liter"
                            step="0.1"
                          />
                          <NumberInput
                            label="Trips per Month *"
                            value={inputs.euroDiesel.tripsPerMonth}
                            onChange={(v) => updateValue('euroDiesel', 'tripsPerMonth', v)}
                            helpText="Number of return trips monthly"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Chinese Diesel */}
                    <AccordionItem value="chinese">
                      <AccordionTrigger className="text-lg font-semibold">
                        Chinese Diesel Truck
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-3 pt-4">
                          <NumberInput
                            label="Purchase Price *"
                            value={inputs.chineseDiesel.purchasePrice}
                            onChange={(v) => updateValue('chineseDiesel', 'purchasePrice', v)}
                            prefix={inputs.currencySymbol}
                          />
                          <NumberInput
                            label="Fuel Consumption *"
                            value={inputs.chineseDiesel.consumption}
                            onChange={(v) => updateValue('chineseDiesel', 'consumption', v)}
                            suffix="km/liter"
                            step="0.1"
                          />
                          <NumberInput
                            label="Diesel Price *"
                            value={inputs.chineseDiesel.price}
                            onChange={(v) => updateValue('chineseDiesel', 'price', v)}
                            prefix={inputs.currencySymbol}
                            suffix="/liter"
                            step="0.1"
                          />
                          <NumberInput
                            label="Trips per Month *"
                            value={inputs.chineseDiesel.tripsPerMonth}
                            onChange={(v) => updateValue('chineseDiesel', 'tripsPerMonth', v)}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Electric Trucks Parameters */}
          <TabsContent value="electric">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Electric Truck Options
                  </CardTitle>
                  <CardDescription>
                    Configure parameters for different electric truck models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="charged">
                    {/* Electric Charged */}
                    <AccordionItem value="charged">
                      <AccordionTrigger className="text-lg font-semibold">
                        Electric (Depot Charged)
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-3 pt-4">
                          <NumberInput
                            label="Purchase Price *"
                            value={inputs.electricCharged.purchasePrice}
                            onChange={(v) => updateValue('electricCharged', 'purchasePrice', v)}
                            prefix={inputs.currencySymbol}
                          />
                          <NumberInput
                            label="Energy Consumption *"
                            value={inputs.electricCharged.consumption}
                            onChange={(v) => updateValue('electricCharged', 'consumption', v)}
                            suffix="kWh/km"
                            helpText="Energy used per kilometer"
                            step="0.01"
                          />
                          <NumberInput
                            label="Electricity Price *"
                            value={inputs.electricCharged.price}
                            onChange={(v) => updateValue('electricCharged', 'price', v)}
                            prefix={inputs.currencySymbol}
                            suffix="/kWh"
                            step="0.1"
                          />
                          <NumberInput
                            label="Trips per Month *"
                            value={inputs.electricCharged.tripsPerMonth}
                            onChange={(v) => updateValue('electricCharged', 'tripsPerMonth', v)}
                            helpText="May be lower due to charging time"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Electric Swapped */}
                    <AccordionItem value="swapped">
                      <AccordionTrigger className="text-lg font-semibold">
                        Electric (Battery Swapped)
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-3 pt-4">
                          <NumberInput
                            label="Purchase Price *"
                            value={inputs.electricSwapped.purchasePrice}
                            onChange={(v) => updateValue('electricSwapped', 'purchasePrice', v)}
                            prefix={inputs.currencySymbol}
                          />
                          <NumberInput
                            label="Energy Consumption *"
                            value={inputs.electricSwapped.consumption}
                            onChange={(v) => updateValue('electricSwapped', 'consumption', v)}
                            suffix="kWh/km"
                            step="0.01"
                          />
                          <NumberInput
                            label="Electricity Price *"
                            value={inputs.electricSwapped.price}
                            onChange={(v) => updateValue('electricSwapped', 'price', v)}
                            prefix={inputs.currencySymbol}
                            suffix="/kWh"
                            step="0.1"
                          />
                          <NumberInput
                            label="Trips per Month *"
                            value={inputs.electricSwapped.tripsPerMonth}
                            onChange={(v) => updateValue('electricSwapped', 'tripsPerMonth', v)}
                            helpText="Can maintain same schedule as diesel"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Electric BaaS */}
                    <AccordionItem value="baas">
                      <AccordionTrigger className="text-lg font-semibold">
                        Electric (Battery as a Service)
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-3 pt-4">
                          <NumberInput
                            label="Purchase Price (without battery) *"
                            value={inputs.electricBaaS.purchasePrice}
                            onChange={(v) => updateValue('electricBaaS', 'purchasePrice', v)}
                            prefix={inputs.currencySymbol}
                            helpText="Lower upfront cost"
                          />
                          <NumberInput
                            label="Battery Subscription Cost *"
                            value={inputs.electricBaaS.batteryPrice}
                            onChange={(v) => updateValue('electricBaaS', 'batteryPrice', v)}
                            prefix={inputs.currencySymbol}
                            helpText="Annual battery rental/service cost"
                          />
                          <NumberInput
                            label="Energy Consumption *"
                            value={inputs.electricBaaS.consumption}
                            onChange={(v) => updateValue('electricBaaS', 'consumption', v)}
                            suffix="kWh/km"
                            step="0.01"
                          />
                          <NumberInput
                            label="Electricity Price *"
                            value={inputs.electricBaaS.price}
                            onChange={(v) => updateValue('electricBaaS', 'price', v)}
                            prefix={inputs.currencySymbol}
                            suffix="/kWh"
                            step="0.1"
                          />
                          <NumberInput
                            label="Trips per Month *"
                            value={inputs.electricBaaS.tripsPerMonth}
                            onChange={(v) => updateValue('electricBaaS', 'tripsPerMonth', v)}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Review & Calculate */}
          <TabsContent value="review">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Review Your Configuration
                </CardTitle>
                <CardDescription>
                  Review all parameters before calculating TCO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Summary Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Corridor</p>
                    <p className="text-lg font-semibold">{inputs.corridorName}</p>
                    <p className="text-sm text-gray-600">{inputs.returnTripDistance} km round trip</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Financial Terms</p>
                    <p className="text-lg font-semibold">{(inputs.interestRate * 100).toFixed(1)}% / {inputs.loanTerm} years</p>
                    <p className="text-sm text-gray-600">{inputs.truckLifespan} year lifespan</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Currency</p>
                    <p className="text-lg font-semibold">{inputs.currency}</p>
                    <p className="text-sm text-gray-600">1 USD = {inputs.exchangeRate} {inputs.currency}</p>
                  </div>
                </div>

                <Separator />

                {/* Truck Comparison Summary */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Diesel Trucks
                    </h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">Euro Diesel</p>
                        <p className="text-sm text-gray-600">
                          {inputs.currencySymbol}{inputs.euroDiesel.purchasePrice.toLocaleString()} • 
                          {inputs.euroDiesel.consumption} km/L • 
                          {inputs.euroDiesel.tripsPerMonth} trips/month
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">Chinese Diesel</p>
                        <p className="text-sm text-gray-600">
                          {inputs.currencySymbol}{inputs.chineseDiesel.purchasePrice.toLocaleString()} • 
                          {inputs.chineseDiesel.consumption} km/L • 
                          {inputs.chineseDiesel.tripsPerMonth} trips/month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      Electric Trucks
                    </h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 rounded">
                        <p className="font-medium">Depot Charged</p>
                        <p className="text-sm text-gray-600">
                          {inputs.currencySymbol}{inputs.electricCharged.purchasePrice.toLocaleString()} • 
                          {inputs.electricCharged.consumption} kWh/km • 
                          {inputs.electricCharged.tripsPerMonth} trips/month
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <p className="font-medium">Battery Swapped</p>
                        <p className="text-sm text-gray-600">
                          {inputs.currencySymbol}{inputs.electricSwapped.purchasePrice.toLocaleString()} • 
                          {inputs.electricSwapped.consumption} kWh/km • 
                          {inputs.electricSwapped.tripsPerMonth} trips/month
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <p className="font-medium">Battery as a Service</p>
                        <p className="text-sm text-gray-600">
                          {inputs.currencySymbol}{inputs.electricBaaS.purchasePrice.toLocaleString()} • 
                          {inputs.electricBaaS.consumption} kWh/km • 
                          {inputs.electricBaaS.tripsPerMonth} trips/month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Calculate Button */}
                <div className="flex justify-center">
                  <Button type="submit" size="lg" className="px-12">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate TCO Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation Buttons */}
        <Card className="mt-4">
          <CardContent className="flex justify-between items-center py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const tabs = ['corridor', 'diesel', 'electric', 'review'];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
              }}
              disabled={activeTab === 'corridor'}
            >
              Previous
            </Button>
            {activeTab !== 'review' ? (
              <Button
                type="button"
                onClick={() => {
                  const tabs = ['corridor', 'diesel', 'electric', 'review'];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
                }}
              >
                Next
              </Button>
            ) : (
              <Button type="submit">
                Calculate
              </Button>
            )}
          </CardContent>
        </Card>
      </form>
      </div>
    </div>
  );
}
