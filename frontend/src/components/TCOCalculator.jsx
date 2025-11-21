import React, { useState, useEffect } from 'react';
import { Calculator, TrendingDown, TrendingUp, Truck, Zap, FileText, Download, BarChart3, Info, MapPin, DollarSign, Calendar, Settings, LogIn, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import TCOInputForm from './TCOInputForm';
import TCOResults from './TCOResults';
import { getDefaultInputs, calculateDieselAnalysis, calculateElectricAnalysis, generateComparison, calculateBreakEven, calculateEnvironmentalImpact } from '../utils/tcoCalculations';
import { useAuth } from '../hooks/useAuth';
import { saveCalculation, getCalculationHistory, deleteCalculation, getMoodleSignupUrl, getCalculatorReturnUrl } from '../services/moodleAuth';

export default function TCOCalculator() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  const [step, setStep] = useState('corridor'); // corridor, inputs, results
  const [selectedCorridor, setSelectedCorridor] = useState(null);
  const [inputs, setInputs] = useState(null);
  const [results, setResults] = useState(null);
  const [savedCalculations, setSavedCalculations] = useState([]);
  const [serverCalculations, setServerCalculations] = useState([]);

  // Shallow deep merge for plain objects
  const deepMerge = (base, override) => {
    if (!override || typeof override !== 'object') return base;
    const out = Array.isArray(base) ? [...base] : { ...base };
    for (const k of Object.keys(override)) {
      const bv = base?.[k];
      const ov = override[k];
      if (ov && typeof ov === 'object' && !Array.isArray(ov)) {
        out[k] = deepMerge(bv || {}, ov);
      } else {
        out[k] = ov;
      }
    }
    return out;
  };

  // Compute results from inputs
  const computeResults = (formInputs) => {
    // Calculate diesel results
    const euroDieselResults = calculateDieselAnalysis(formInputs, 'euro');
    const chineseDieselResults = calculateDieselAnalysis(formInputs, 'chinese');

    // Calculate electric results (exclude BaaS variant)
    const europeanEVResults = calculateElectricAnalysis(formInputs, 'europeanEV');
    const chineseEVChargedResults = calculateElectricAnalysis(formInputs, 'chineseEVCharged');
    const chineseEVSwappedResults = calculateElectricAnalysis(formInputs, 'chineseEVSwapped');

    // Generate comparisons
    const comparisonVsEuro = generateComparison(euroDieselResults, europeanEVResults);
    const comparisonVsChinese = generateComparison(chineseDieselResults, chineseEVChargedResults);

    // Calculate break-even
    const breakEven = calculateBreakEven(euroDieselResults, europeanEVResults, formInputs);

    // Calculate environmental impact
    const environmental = calculateEnvironmentalImpact(euroDieselResults, europeanEVResults);

    return {
      diesel: {
        euro: euroDieselResults,
        chinese: chineseDieselResults
      },
      electric: {
        europeanEV: europeanEVResults,
        chineseEVCharged: chineseEVChargedResults,
        chineseEVSwapped: chineseEVSwappedResults
      },
      comparisons: {
        vsEuro: comparisonVsEuro,
        vsChinese: comparisonVsChinese
      },
      breakEven,
      environmental,
      timestamp: new Date().toISOString(),
      corridorName: formInputs.corridorName,
      currency: formInputs.currency,
      currencySymbol: formInputs.currencySymbol
    };
  };

  // Load a calculation from server history
  const handleLoadServerCalculation = (calc) => {
    try {
      // Parse if stored as strings
      const parsedInputs = typeof calc?.inputs === 'string' ? JSON.parse(calc.inputs) : calc?.inputs;
      let parsedResults = typeof calc?.results === 'string' ? JSON.parse(calc.results) : calc?.results;

      if (!parsedInputs) return;

      // Establish corridor id and defaults
      const corridorId = calc.corridor || parsedInputs.corridor || null;
      const defaults = corridorId ? getDefaultInputs(corridorId) : getDefaultInputs('south-africa');
      // Merge server inputs into defaults to ensure required fields exist
      const mergedInputs = deepMerge(defaults, parsedInputs);

      // If results missing expected structure, recompute from inputs
      const hasStructure = parsedResults && parsedResults.diesel && parsedResults.diesel.euro && parsedResults.electric && parsedResults.electric.europeanEV;
      if (!hasStructure) {
        parsedResults = computeResults(mergedInputs);
      }

      setInputs(mergedInputs);
      setResults(parsedResults);
      setSelectedCorridor(corridorId);
      setStep('results');
    } catch (e) {
      console.error('Failed to load server calculation', e);
    }
  };

  // Corridor options
  const corridors = [
    {
      id: 'south-africa',
      name: 'South Africa',
      subtitle: 'N3 Corridor (Durban to Johannesburg)',
      distance: '600 km',
      currency: 'ZAR',
      flag: '🇿🇦',
      description: 'Major freight corridor connecting Durban port to Johannesburg industrial hub'
    },
    {
      id: 'kenya',
      name: 'Kenya',
      subtitle: 'Mombasa to Nairobi Corridor',
      distance: '480 km',
      currency: 'KES',
      flag: '🇰🇪',
      description: 'Primary trade route from Mombasa port to capital Nairobi'
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      subtitle: 'Central Corridor (Dar es Salaam to Kampala)',
      distance: '1,420 km',
      currency: 'TZS',
      flag: '🇹🇿',
      description: 'Critical corridor connecting East African ports to inland regions'
    },
    {
      id: 'ethiopia',
      name: 'Ethiopia',
      subtitle: 'Addis Ababa to Djibouti Corridor',
      distance: '950 km',
      currency: 'ETB',
      flag: '🇪🇹',
      description: 'Key landlocked country corridor to Djibouti port'
    }
  ];

  // Handle corridor selection
  const handleCorridorSelect = (corridorId) => {
    setSelectedCorridor(corridorId);
    const defaultInputs = getDefaultInputs(corridorId);
    setInputs(defaultInputs);
    setStep('inputs');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
  };

  // Handle calculation
  const handleCalculate = (formInputs) => {
    setInputs(formInputs);
    const calculationResults = computeResults(formInputs);
    setResults(calculationResults);
    setStep('results');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
  };

  // Save calculation
  const handleSaveCalculation = async (name, notes = '') => {
    const calculationData = {
      id: Date.now(),
      name,
      notes,
      corridor: selectedCorridor,
      inputs,
      results,
      timestamp: new Date().toISOString()
    };

    // If authenticated, save to Moodle backend
    if (isAuthenticated) {
      try {
        const result = await saveCalculation(calculationData);
        if (result.success) {
          // Refresh server calculations
          await loadServerCalculations();
          return { success: true, message: 'Calculation saved to your account' };
        } else {
          throw new Error(result.error || 'Failed to save');
        }
      } catch (error) {
        console.error('Server save failed:', error);
        // Fall back to localStorage
        const existing = JSON.parse(localStorage.getItem('tco_calculations') || '[]');
        localStorage.setItem('tco_calculations', JSON.stringify([calculationData, ...existing]));
        setSavedCalculations([calculationData, ...savedCalculations]);
        return { success: true, message: 'Saved locally (server unavailable)' };
      }
    } else {
      // Guest user: save to localStorage only
      setSavedCalculations([calculationData, ...savedCalculations]);
      const existing = JSON.parse(localStorage.getItem('tco_calculations') || '[]');
      localStorage.setItem('tco_calculations', JSON.stringify([calculationData, ...existing]));
      return { success: true, message: 'Saved locally. Sign in to save to your account.' };
    }
  };

  // Load saved calculations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tco_calculations');
    if (saved) {
      try {
        setSavedCalculations(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load saved calculations:', error);
      }
    }
  }, []);

  // Load server calculations for authenticated users
  useEffect(() => {
    if (isAuthenticated) {
      loadServerCalculations();
    }
  }, [isAuthenticated]);

  const loadServerCalculations = async () => {
    try {
      const history = await getCalculationHistory(10);
      setServerCalculations(history);
    } catch (error) {
      console.error('Failed to load server calculations:', error);
    }
  };

  // Reset calculator
  const handleReset = () => {
    setStep('corridor');
    setSelectedCorridor(null);
    setInputs(null);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Electric Truck TCO Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare Total Cost of Ownership: Diesel vs Electric Trucks across African Corridors
          </p>
        </div>

        {/* Authentication Banner */}
        <div className="max-w-5xl mx-auto mb-6">
          {!isLoading && !isAuthenticated && (
            <Alert className="bg-blue-50 border-blue-200">
              <LogIn className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900">Sign in to save your calculations</AlertTitle>
              <AlertDescription className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-blue-800">
                  Create an account or sign in with your Moodle LMS credentials to save calculation history, add notes, and access your results from anywhere.
                </span>
                <div className="flex items-center gap-2">
                  <Button onClick={() => login(getCalculatorReturnUrl())} size="sm" className="bg-blue-600 hover:bg-blue-700 shrink-0">
                    Sign In
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(getMoodleSignupUrl(), '_blank')}
                    className="shrink-0"
                  >
                    Register
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}
          {!isLoading && isAuthenticated && user && (
            <Alert className="bg-green-50 border-green-200">
              <User className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900">Welcome back, {user.firstname}!</AlertTitle>
              <AlertDescription className="flex items-center justify-between">
                <span className="text-green-800">
                  Your calculations will be automatically saved to your account. You have {serverCalculations.length} saved calculation{serverCalculations.length !== 1 ? 's' : ''}.
                </span>
                <Button onClick={logout} variant="outline" size="sm" className="ml-4 shrink-0">
                  Sign Out
                </Button>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Progress Indicator */}
        {step !== 'corridor' && (
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div className={`flex items-center ${step === 'inputs' || step === 'results' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'inputs' || step === 'results' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium">Corridor</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className={`h-full ${step === 'inputs' || step === 'results' ? 'bg-green-600' : 'bg-gray-200'} transition-all`} />
              </div>
              <div className={`flex items-center ${step === 'results' ? 'text-green-600' : step === 'inputs' ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'results' ? 'bg-green-600 text-white' : step === 'inputs' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  <Settings className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium">Inputs</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div className={`h-full ${step === 'results' ? 'bg-green-600' : 'bg-gray-200'} transition-all`} />
              </div>
              <div className={`flex items-center ${step === 'results' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'results' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium">Results</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Corridor Selection */}
        {step === 'corridor' && (
          <div className="max-w-5xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Select Your Operating Corridor
                </CardTitle>
                <CardDescription>
                  Choose the primary route where you operate to get region-specific calculations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {corridors.map((corridor) => (
                    <Card
                      key={corridor.id}
                      className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-blue-500"
                      onClick={() => handleCorridorSelect(corridor.id)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <span className="text-3xl">{corridor.flag}</span>
                              {corridor.name}
                            </CardTitle>
                            <CardDescription className="mt-1">
                              {corridor.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Distance:</span>
                            <Badge variant="secondary">{corridor.distance}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Currency:</span>
                            <Badge variant="secondary">{corridor.currency}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{corridor.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Alert */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>How it works</AlertTitle>
              <AlertDescription>
                Select your corridor to get pre-filled default values based on regional data. 
                You'll then be able to customize all parameters to match your specific operation before calculating TCO.
              </AlertDescription>
            </Alert>

            {/* Saved Calculations (Local) */}
            {savedCalculations.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Recent Calculations
                  </CardTitle>
                  <CardDescription>
                    Access your previously saved TCO analyses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {savedCalculations.slice(0, 5).map((calc) => (
                      <div
                        key={calc.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                          setInputs(calc.inputs);
                          setResults(calc.results);
                          setSelectedCorridor(calc.corridor);
                          setStep('results');
                        }}
                      >
                        <div>
                          <p className="font-medium">{calc.name || 'Untitled Calculation'}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(calc.timestamp).toLocaleDateString()} - {calc.inputs?.corridorName}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Server Calculations (Account) */}
            {isAuthenticated && serverCalculations && serverCalculations.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Your Saved Calculations
                  </CardTitle>
                  <CardDescription>
                    These are saved to your TAG LMS account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {serverCalculations.slice(0, 10).map((calc) => (
                      <div
                        key={calc.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="min-w-0">
                          <p className="font-medium truncate">{calc.name || 'Untitled Calculation'}</p>
                          <p className="text-sm text-gray-600 truncate">
                            {calc.timecreated ? new Date(calc.timecreated * 1000).toLocaleString() : ''}
                            {calc.inputs?.corridorName ? ` • ${calc.inputs.corridorName}` : ''}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 ml-4 shrink-0">
                          <Button variant="secondary" size="sm" onClick={() => handleLoadServerCalculation(calc)}>
                            Load
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Step 2: Input Form */}
        {step === 'inputs' && inputs && (
          <TCOInputForm
            initialInputs={inputs}
            onCalculate={handleCalculate}
            onBack={handleReset}
          />
        )}

        {/* Step 3: Results */}
        {step === 'results' && results && (
          <TCOResults
            results={results}
            inputs={inputs}
            onSave={handleSaveCalculation}
            onReset={handleReset}
            onRecalculate={() => setStep('inputs')}
            onInputChange={(updatedInputs) => {
              setInputs(updatedInputs);
              const newResults = computeResults(updatedInputs);
              setResults(newResults);
            }}
          />
        )}
      </div>
    </div>
  );
}
