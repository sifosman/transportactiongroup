import React, { useEffect, useState } from 'react';
import './App.css';
import { Search, Users, BookOpen, Award, Truck, Leaf, Building, Globe, Star, Download, Eye, MapPin, Calendar, Clock, CheckCircle, User, Mail, Lock, Phone, FileText, Upload, Calculator, Menu, X } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog.jsx';
import { getMoodleDashboardUrl, getMoodleSignupUrl } from './services/moodleAuth.js';
import TCOCalculator from './components/TCOCalculator.jsx';
import { useAuth } from './hooks/useAuth.jsx';

// Import assets
import tagLogo from './assets/TAGhiresblack.png';
import roadFreightCover from './assets/road_freight_sustainability_cover.png';
import truckDriverCover from './assets/truck_driver_handbook_cover.png';

function App() {
  const { isAuthenticated, user, login, logout, isLoading } = useAuth();
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const [showRegistry, setShowRegistry] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', phone: '', role: 'driver' });
  const [refundOpen, setRefundOpen] = useState(false);
  const [refundMarkdown, setRefundMarkdown] = useState('');
  const [contactInfo, setContactInfo] = useState({ emails: [], address: '' });
  const [profileForm, setProfileForm] = useState({
    personalInfo: { name: '', email: '', phone: '', location: '', experience: '' },
    workHistory: [{ company: '', position: '', duration: '', description: '' }],
    certifications: [],
    skills: []
  });

  // Certified Professional Drivers Registry
  const certifiedDrivers = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Driver",
      location: "Cape Town",
      experience: "5 years",
      rating: 4.8,
      specialization: "Long-haul transport",
      avatar: "MJ",
      priorEducation: "Grade 12, NQF 4 Transport Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-001", completed: "2024-01-15" },
        { name: "Eco-Driving Specialist", certNumber: "EDS-2024-001", completed: "2024-02-20" }
      ]
    },
    {
      id: 2,
      name: "David Brown",
      role: "Driver",
      location: "Durban",
      experience: "3 years",
      rating: 4.7,
      specialization: "Regional delivery",
      avatar: "DB",
      priorEducation: "Grade 11, NQF 2 Logistics",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-002", completed: "2024-01-20" },
        { name: "Hazmat Transport Specialist", certNumber: "HTS-2024-002", completed: "2024-03-10" }
      ]
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Driver",
      location: "Bloemfontein",
      experience: "7 years",
      rating: 4.6,
      specialization: "Hazmat transport",
      avatar: "JW",
      priorEducation: "Grade 12, NQF 5 Dangerous Goods",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-003", completed: "2024-01-25" },
        { name: "Advanced Safety Specialist", certNumber: "ASS-2024-003", completed: "2024-02-28" }
      ]
    },
    {
      id: 4,
      name: "Peter Mthembu",
      role: "Driver",
      location: "Johannesburg",
      experience: "4 years",
      rating: 4.5,
      specialization: "Urban delivery",
      avatar: "PM",
      priorEducation: "Grade 10, NQF 3 Motor Vehicle Driving",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-004", completed: "2024-02-05" },
        { name: "Urban Navigation Specialist", certNumber: "UNS-2024-004", completed: "2024-03-15" }
      ]
    },
    {
      id: 5,
      name: "Andrew Botha",
      role: "Driver",
      location: "Port Elizabeth",
      experience: "6 years",
      rating: 4.9,
      specialization: "Cross-border transport",
      avatar: "AB",
      priorEducation: "Grade 12, NQF 4 International Trade",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-005", completed: "2024-02-12" },
        { name: "Cross-Border Specialist", certNumber: "CBS-2024-005", completed: "2024-03-20" }
      ]
    },
    {
      id: 6,
      name: "Sipho Ndlovu",
      role: "Driver",
      location: "Pretoria",
      experience: "8 years",
      rating: 4.8,
      specialization: "Heavy machinery transport",
      avatar: "SN",
      priorEducation: "Grade 12, NQF 5 Heavy Vehicle Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-006", completed: "2024-02-18" },
        { name: "Heavy Load Specialist", certNumber: "HLS-2024-006", completed: "2024-03-25" }
      ]
    },
    {
      id: 7,
      name: "John van der Merwe",
      role: "Driver",
      location: "Cape Town",
      experience: "12 years",
      rating: 5.0,
      specialization: "Refrigerated transport",
      avatar: "JM",
      priorEducation: "Grade 12, NQF 6 Cold Chain Management",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-007", completed: "2024-02-22" },
        { name: "Cold Chain Specialist", certNumber: "CCS-2024-007", completed: "2024-03-30" }
      ]
    },
    {
      id: 8,
      name: "Thabo Molefe",
      role: "Driver",
      location: "Durban",
      experience: "5 years",
      rating: 4.6,
      specialization: "Container transport",
      avatar: "TM",
      priorEducation: "Grade 11, NQF 4 Port Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-008", completed: "2024-03-01" },
        { name: "Container Handling Specialist", certNumber: "CHS-2024-008", completed: "2024-04-05" }
      ]
    },
    {
      id: 9,
      name: "Willem Steyn",
      role: "Driver",
      location: "Bloemfontein",
      experience: "9 years",
      rating: 4.7,
      specialization: "Livestock transport",
      avatar: "WS",
      priorEducation: "Grade 12, NQF 5 Animal Welfare",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-009", completed: "2024-03-08" },
        { name: "Livestock Transport Specialist", certNumber: "LTS-2024-009", completed: "2024-04-12" }
      ]
    },
    {
      id: 10,
      name: "Mandla Dlamini",
      role: "Driver",
      location: "Johannesburg",
      experience: "3 years",
      rating: 4.4,
      specialization: "Fuel transport",
      avatar: "MD",
      priorEducation: "Grade 12, NQF 4 Petroleum Products",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-010", completed: "2024-03-15" },
        { name: "Fuel Transport Specialist", certNumber: "FTS-2024-010", completed: "2024-04-18" }
      ]
    },
    {
      id: 11,
      name: "Robert Nkomo",
      role: "Driver",
      location: "Port Elizabeth",
      experience: "11 years",
      rating: 4.9,
      specialization: "Mining equipment transport",
      avatar: "RN",
      priorEducation: "Grade 10, NQF 5 Mining Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-011", completed: "2024-03-22" },
        { name: "Mining Transport Specialist", certNumber: "MTS-2024-011", completed: "2024-04-25" }
      ]
    }
  ];

  // Certified Fleet Managers Registry
  const certifiedManagers = [
    {
      id: 1,
      name: "Sarah Williams",
      role: "Manager",
      location: "Johannesburg",
      experience: "8 years",
      rating: 4.9,
      specialization: "Fleet optimization",
      avatar: "SW",
      priorEducation: "NQF 7 Bachelor of Commerce, NQF 8 Transport Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-001", completed: "2024-02-10" },
        { name: "Fleet Optimization Specialist", certNumber: "FOS-2024-001", completed: "2024-03-15" }
      ]
    },
    {
      id: 2,
      name: "Lisa Davis",
      role: "Manager",
      location: "Port Elizabeth",
      experience: "10 years",
      rating: 5.0,
      specialization: "Sustainability consulting",
      avatar: "LD",
      priorEducation: "NQF 8 Masters in Environmental Management, NQF 9 PhD Sustainability",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-002", completed: "2024-02-15" },
        { name: "Sustainability Consultant", certNumber: "SC-2024-002", completed: "2024-03-20" }
      ]
    },
    {
      id: 3,
      name: "Mark Thompson",
      role: "Manager",
      location: "Cape Town",
      experience: "12 years",
      rating: 4.8,
      specialization: "Operations management",
      avatar: "MT",
      priorEducation: "NQF 7 Bachelor of Business Administration, NQF 8 Operations Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-003", completed: "2024-02-20" },
        { name: "Operations Excellence Specialist", certNumber: "OES-2024-003", completed: "2024-03-25" }
      ]
    },
    {
      id: 4,
      name: "Jennifer Adams",
      role: "Manager",
      location: "Durban",
      experience: "7 years",
      rating: 4.7,
      specialization: "Supply chain management",
      avatar: "JA",
      priorEducation: "NQF 7 Bachelor of Logistics, NQF 8 Supply Chain Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-004", completed: "2024-02-25" },
        { name: "Supply Chain Optimization Specialist", certNumber: "SCOS-2024-004", completed: "2024-03-30" }
      ]
    },
    {
      id: 5,
      name: "Daniel Kruger",
      role: "Manager",
      location: "Pretoria",
      experience: "15 years",
      rating: 5.0,
      specialization: "Strategic planning",
      avatar: "DK",
      priorEducation: "NQF 8 MBA Strategic Management, NQF 9 PhD Business Strategy",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-005", completed: "2024-03-01" },
        { name: "Strategic Planning Specialist", certNumber: "SPS-2024-005", completed: "2024-04-05" }
      ]
    },
    {
      id: 6,
      name: "Rachel Patel",
      role: "Manager",
      location: "Johannesburg",
      experience: "9 years",
      rating: 4.8,
      specialization: "Technology integration",
      avatar: "RP",
      priorEducation: "NQF 7 Bachelor of Information Technology, NQF 8 Transport Technology",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-006", completed: "2024-03-05" },
        { name: "Technology Integration Specialist", certNumber: "TIS-2024-006", completed: "2024-04-10" }
      ]
    },
    {
      id: 7,
      name: "Kevin O'Brien",
      role: "Manager",
      location: "Cape Town",
      experience: "11 years",
      rating: 4.9,
      specialization: "Risk management",
      avatar: "KO",
      priorEducation: "NQF 7 Bachelor of Risk Management, NQF 8 Advanced Risk Analysis",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-007", completed: "2024-03-10" },
        { name: "Risk Management Specialist", certNumber: "RMS-2024-007", completed: "2024-04-15" }
      ]
    },
    {
      id: 8,
      name: "Nomsa Mthembu",
      role: "Manager",
      location: "Durban",
      experience: "6 years",
      rating: 4.6,
      specialization: "Human resources",
      avatar: "NM",
      priorEducation: "NQF 7 Bachelor of Human Resources, NQF 8 Industrial Psychology",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-008", completed: "2024-03-15" },
        { name: "HR Excellence Specialist", certNumber: "HRES-2024-008", completed: "2024-04-20" }
      ]
    },
    {
      id: 9,
      name: "Graham Mitchell",
      role: "Manager",
      location: "Port Elizabeth",
      experience: "13 years",
      rating: 4.9,
      specialization: "Financial management",
      avatar: "GM",
      priorEducation: "NQF 7 Bachelor of Accounting, NQF 8 Financial Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-009", completed: "2024-03-20" },
        { name: "Financial Excellence Specialist", certNumber: "FES-2024-009", completed: "2024-04-25" }
      ]
    },
    {
      id: 10,
      name: "Priya Sharma",
      role: "Manager",
      location: "Bloemfontein",
      experience: "8 years",
      rating: 4.7,
      specialization: "Quality assurance",
      avatar: "PS",
      priorEducation: "NQF 7 Bachelor of Quality Management, NQF 8 Six Sigma Black Belt",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-010", completed: "2024-03-25" },
        { name: "Quality Assurance Specialist", certNumber: "QAS-2024-010", completed: "2024-04-30" }
      ]
    }
  ];

  // Combined registry for search functionality
  const certifiedProfessionals = [...certifiedDrivers, ...certifiedManagers];

  const filteredProfessionals = certifiedProfessionals.filter(prof =>
    prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prof.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prof.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  // Load refund policy markdown and extract contact details
  useEffect(() => {
    fetch('/refund-policy.md')
      .then((res) => res.text())
      .then((text) => {
        setRefundMarkdown(text);
        // Extract emails (cleanup any accidental spaces like "sales@ transportactiongroup.com")
        const emailMatches = Array.from(text.matchAll(/[A-Za-z0-9._%+-]+@ ?transportactiongroup\.com/gi)).map(m => m[0].replace('@ ', '@'));
        // Extract physical address
        let address = '';
        const addrMatch = text.match(/Physical address:\s*(.*)/i);
        if (addrMatch) address = addrMatch[1].trim();
        setContactInfo({ emails: Array.from(new Set(emailMatches)), address });
      })
      .catch(() => {
        // fail silently; UI will just not show content
      });
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to homepage then scroll to a specific section
  const goToFrontSection = (sectionId) => {
    setCurrentSection('home');
    // Wait for home to render, then scroll
    setTimeout(() => scrollToSection(sectionId), 0);
  };

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src={tagLogo} alt="TAG Logo" className="h-16 w-auto" />
          </div>
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => { setCurrentSection('home'); scrollToSection('home'); }} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">Home</button>
              <button onClick={() => goToFrontSection('services')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Services</button>
              <button onClick={() => goToFrontSection('knowledge')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Knowledge Hub</button>
              <button onClick={() => goToFrontSection('partner')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">Partner with Us</button>
              <button onClick={() => goToFrontSection('books')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600">Books</button>
              <button onClick={() => goToFrontSection('search')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Search Professionals</button>
              <button onClick={() => { setCurrentSection('tco-calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'tco-calculator' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:text-green-600'}`}>
                <Calculator className="w-4 h-4 inline mr-1" />
                TCO Calculator
              </button>
              {!isLoading && !isAuthenticated && (
                <>
                  <button onClick={() => { login(getMoodleDashboardUrl()); }} className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'login' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:text-indigo-600'}`}>Login</button>
                  <button onClick={() => { window.location.href = getMoodleSignupUrl(); }} className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'register' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:text-green-600'}`}>Register</button>
                </>
              )}
              {!isLoading && isAuthenticated && (
                <button
                  onClick={() => window.open(import.meta.env.VITE_MOODLE_URL || 'https://learning.transportactiongroup.com', '_blank')}
                  className="px-3 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 inline-flex items-center gap-2"
                  title={user?.firstname ? `Logged in as ${user.firstname}` : 'My Account'}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden lg:inline">{user?.firstname || 'Account'}</span>
                </button>
              )}
            </div>
          </div>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              className="p-2 rounded-md border border-gray-200 text-gray-700"
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              <button onClick={() => { setMobileOpen(false); setCurrentSection('home'); scrollToSection('home'); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Home</button>
              <button onClick={() => { setMobileOpen(false); goToFrontSection('services'); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Services</button>
              <button onClick={() => { setMobileOpen(false); goToFrontSection('knowledge'); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Knowledge Hub</button>
              <button onClick={() => { setMobileOpen(false); goToFrontSection('partner'); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Partner with Us</button>
              <button onClick={() => { setMobileOpen(false); goToFrontSection('books'); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Books</button>
              <button onClick={() => { setMobileOpen(false); goToFrontSection('search'); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Search Professionals</button>
              <button onClick={() => { setMobileOpen(false); setCurrentSection('tco-calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">TCO Calculator</button>
              {!isLoading && !isAuthenticated && (
                <div className="flex gap-2 px-3 pt-2">
                  <button onClick={() => { setMobileOpen(false); login(getMoodleDashboardUrl()); }} className="flex-1 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Login</button>
                  <button onClick={() => { setMobileOpen(false); window.location.href = getMoodleSignupUrl(); }} className="flex-1 px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">Register</button>
                </div>
              )}
              {!isLoading && isAuthenticated && (
                <div className="px-3 pt-2">
                  <button
                    onClick={() => { setMobileOpen(false); window.open(import.meta.env.VITE_MOODLE_URL || 'https://learning.transportactiongroup.com', '_blank'); }}
                    className="w-full px-3 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 inline-flex items-center justify-center gap-2"
                    title={user?.firstname ? `Logged in as ${user.firstname}` : 'My Account'}
                  >
                    <User className="w-4 h-4" />
                    <span>{user?.firstname || 'Account'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src={tagLogo} alt="TAG Logo" className="h-40 w-auto mx-auto mb-8" />
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
          Reducing Road Freight Emissions - Transformation to Net Zero
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional certification and training for sustainable road freight operations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection('services')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Explore Our Services
          </button>
          <button onClick={() => scrollToSection('knowledge')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Access Knowledge Hub
          </button>
          <button onClick={() => scrollToSection('partner')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Partner with Us
          </button>
          <button onClick={() => setRefundOpen(true)} className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Refund Policy
          </button>
        </div>
        {/* Contact details snippet from refund policy */}
        {(contactInfo.emails.length > 0 || contactInfo.address) && (
          <div className="mt-8 text-sm text-gray-700 max-w-2xl mx-auto">
            <div className="flex flex-col gap-1">
              {contactInfo.emails.length > 0 && (
                <div>
                  <span className="font-semibold">Contact Emails:</span>{' '}
                  {contactInfo.emails.map((e, i) => (
                    <a key={e+i} href={`mailto:${e}`} className="text-blue-700 hover:underline mr-2">{e}</a>
                  ))}
                </div>
              )}
              {contactInfo.address && (
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span>{contactInfo.address}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const StatsSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600">21</div>
            <div className="text-gray-600">Certified Professionals</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600">42</div>
            <div className="text-gray-600">Certifications Issued</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600">5</div>
            <div className="text-gray-600">South African Provinces</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600">25%</div>
            <div className="text-gray-600">Average Emission Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );

  const TCOCalculatorPromo = () => (
    <div className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Electric Truck TCO Calculator
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Make data-driven decisions for your fleet electrification journey. Compare Total Cost of Ownership between diesel and electric trucks across African corridors.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Compare diesel vs electric across 4 African corridors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">10-year lifetime cost analysis with break-even calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Environmental impact & CO₂ emissions comparison</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Save and compare multiple scenarios</span>
                </div>
              </div>
              <button 
                onClick={() => setCurrentSection('tco-calculator')}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Launch TCO Calculator
              </button>
            </div>
            <div className="relative bg-gray-100 p-0 md:p-0 flex items-stretch justify-center">
              <img
                src="/banner.png"
                alt="Electric Truck TCO Calculator"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => setCurrentSection('tco-calculator')}
                  className="bg-white/90 backdrop-blur px-4 py-2 rounded-md text-sm font-medium text-gray-900 shadow hover:bg-white"
                >
                  Open Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesSection = () => (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive solutions for sustainable road freight transformation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Decarbonisation Consulting</h3>
            <p className="text-gray-600">Expert guidance on net zero strategies for transport companies, cargo owners, governments and development agencies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Green Freight Initiatives</h3>
            <p className="text-gray-600">Developing comprehensive green freight programs including corridor assessments and sustainability frameworks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Truck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Road Freight Electrification</h3>
            <p className="text-gray-600">Strategic transition planning towards electric vehicle adoption in commercial freight operations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookOpen className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Skills Development</h3>
            <p className="text-gray-600">Professional training programs for management, executives, and drivers in sustainable freight operations.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const KnowledgeHubSection = () => (
    <div id="knowledge" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Hub</h2>
          <p className="text-lg text-gray-600">Professional certification programs for the transport industry</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Truck Driving Program */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Truck Driving Program</h3>
            <p className="text-gray-600 mb-6">Comprehensive training based on The Professional Truck Driver's Handbook</p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl font-bold text-green-600">$99</div>
              <div className="text-sm text-gray-500">One-time fee</div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm">20 modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm">100 minutes</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">What's Included:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 20 interactive video modules</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Module evaluations (5 questions each)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Free online evaluation system</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Free downloadable certificate</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 1-year free registry listing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Professional profile creation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> CV generation tools</li>
              </ul>
            </div>
            <a href="https://learning.transportactiongroup.com/enrol/index.php?id=2" className="w-full inline-block text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Enrol: Professional Truck Driving
            </a>
          </div>

          {/* Green Freight Professional Program */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Road Freight Managers Green Freight Professional Program</h3>
            <p className="text-gray-600 mb-6">Advanced certification for fleet managers and executives</p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl font-bold text-blue-600">$199</div>
              <div className="text-sm text-gray-500">One-time fee</div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm">20 modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm">300 minutes</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">What's Included:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> 20 interactive video modules</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> Module evaluations (5 questions each)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> Free online evaluation system</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> Free downloadable certificate</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> 1-year free registry listing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> Professional profile creation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> CV generation tools</li>
              </ul>
            </div>
            <a href="https://learning.transportactiongroup.com/enrol/index.php?id=3" className="w-full inline-block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Enrol: Green Freight Program
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const PartnerSection = () => (
    <div id="partner" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner with Us</h2>
          <p className="text-lg text-gray-600">Regional campaigns and white-label solutions for fleet transformation</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Building className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Regional Transformation Campaigns</h3>
            <p className="text-gray-600 mb-6">Large-scale initiatives to develop road freight transformation at the fleet level across regions.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Multi-stakeholder engagement</li>
              <li>• Regional fleet assessments</li>
              <li>• Customized training programs</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Globe className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">White-Label Training Solutions</h3>
            <p className="text-gray-600 mb-6">Complete training programs branded for your organization with custom content and delivery.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Custom branding and identity</li>
              <li>• Tailored content development</li>
              <li>• Multi-language support</li>
              <li>• Dedicated account management</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Truck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Fleet-Level Programs</h3>
            <p className="text-gray-600 mb-6">Comprehensive transformation programs combining management Green Freight Training and Eco driver training.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Executive training programs</li>
              <li>• Driver eco-training certification</li>
              <li>• Fleet performance systems</li>
              <li>• Technology integration</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Discuss Partnership Opportunities
          </button>
        </div>
      </div>
    </div>
  );

  const BooksSection = () => (
    <div id="books" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Published Books</h2>
          <p className="text-lg text-gray-600">Essential reading for transport professionals</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Road Freight Sustainability Book */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-shrink-0">
                <img src={roadFreightCover} alt="Road Freight Sustainability 4.0" className="w-48 h-auto object-contain mx-auto" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Road Freight Sustainability 4.0</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to sustainable practices in road freight operations, covering the latest technologies, regulations, and best practices for achieving net-zero emissions in the transport sector.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(4.8)}
                  <span className="text-sm text-gray-600 ml-2">(4.8/5 - 124 reviews)</span>
                </div>
                <div className="flex gap-4">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Buy on Amazon
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Preview Chapters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Truck Driver's Handbook */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-shrink-0">
                <img src={truckDriverCover} alt="The Professional Truck Driver's Handbook" className="w-48 h-auto object-contain mx-auto" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Professional Truck Driver's Handbook</h3>
                <p className="text-gray-600 mb-4">
                  The definitive guide for professional truck drivers, covering safety protocols, regulations, best practices, and career development strategies for success in the modern transport industry.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(4.9)}
                  <span className="text-sm text-gray-600 ml-2">(4.9/5 - 89 reviews)</span>
                </div>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Buy on Amazon
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Preview Chapters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SearchPreviewSection = () => (
    <div id="search" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Search Certified Professionals</h2>
          <p className="text-lg text-gray-600">Find qualified transport professionals in our registry</p>
        </div>
        
        {/* Registry Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600">21</div>
            <div className="text-gray-600">Total Professionals</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600">11</div>
            <div className="text-gray-600">Certified Drivers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600">10</div>
            <div className="text-gray-600">Certified Managers</div>
          </div>
        </div>

        {/* Search Preview */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Register of Certified Professionals</h3>
            <p className="text-gray-600">Search our comprehensive database of certified transport professionals</p>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setCurrentSection('search')} 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Professional Registry
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SearchSection = () => (
    <div id="search" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Search Certified Professionals</h2>
          <p className="text-lg text-gray-600">Find qualified transport professionals in our registry</p>
        </div>
        
        <div className="mb-8">
          <div className="flex gap-4 max-w-2xl mx-auto mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, location, specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Search
            </button>
          </div>
          
          {/* Registry Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setShowRegistry('all')}
              className={`px-6 py-2 rounded-lg font-medium ${showRegistry === 'all' || !showRegistry ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              All Professionals ({certifiedProfessionals.length})
            </button>
            <button 
              onClick={() => setShowRegistry('drivers')}
              className={`px-6 py-2 rounded-lg font-medium ${showRegistry === 'drivers' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Certified Drivers ({certifiedDrivers.length})
            </button>
            <button 
              onClick={() => setShowRegistry('managers')}
              className={`px-6 py-2 rounded-lg font-medium ${showRegistry === 'managers' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Certified Managers ({certifiedManagers.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(() => {
            let professionalsToShow = certifiedProfessionals;
            if (showRegistry === 'drivers') professionalsToShow = certifiedDrivers;
            if (showRegistry === 'managers') professionalsToShow = certifiedManagers;
            
            return professionalsToShow.filter(prof =>
              prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              prof.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
              prof.specialization.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((professional) => (
              <div key={`${professional.role}-${professional.id}`} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {professional.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{professional.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      professional.role === 'Driver' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {professional.role}
                    </span>
                  </div>
                </div>
                
                {/* Prior Education */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Prior Education:</h4>
                  <p className="text-xs text-gray-600">{professional.priorEducation}</p>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Qualifications:</h4>
                  {professional.qualifications.map((qual, index) => (
                    <div key={index} className="mb-2 p-2 bg-blue-50 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-blue-800">{qual.certNumber}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-medium">{qual.name}</p>
                      <p className="text-xs text-gray-500">Completed: {qual.completed}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{professional.experience} experience</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(professional.rating)}
                  <span className="text-sm text-gray-600 ml-2">{professional.rating}/5.0</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{professional.specialization}</p>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Profile
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download CV
                  </button>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );

  const LoginSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-600">Access your learning dashboard</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={() => setCurrentSection('register')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Register here
              </button>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Demo: Use admin@transportactiongroup.com for admin access
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const RegisterSection = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Register</h2>
            <p className="text-gray-600">Create your account to access training programs</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    value={registerForm.phone}
                    onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={registerForm.role}
                  onChange={(e) => setRegisterForm({...registerForm, role: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="driver">Professional Driver</option>
                  <option value="manager">Fleet Manager</option>
                  <option value="executive">Executive</option>
                  <option value="consultant">Consultant</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Create Account
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={() => setCurrentSection('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={tagLogo} alt="TAG Logo" className="h-12 w-auto mb-4 filter brightness-0 invert" />
            <p className="text-gray-400">
              Leading the transformation to sustainable road freight operations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentSection('home')} className="text-gray-400 hover:text-white">About Us</button></li>
              <li><button onClick={() => setCurrentSection('services')} className="text-gray-400 hover:text-white">Services</button></li>
              <li><button onClick={() => setCurrentSection('knowledge')} className="text-gray-400 hover:text-white">Training Programs</button></li>
              <li><button onClick={() => setCurrentSection('books')} className="text-gray-400 hover:text-white">Certification</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>transportactiongroup@gmail.com</p>
              <p>Durban, South Africa</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Transport Action Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'search':
        return <SearchSection />;
      case 'login':
        return <LoginSection />;
      case 'register':
        return <RegisterSection />;
      case 'tco-calculator':
        return <TCOCalculator />;
      default:
        return (
          <>
            <HeroSection />
            <StatsSection />
            <TCOCalculatorPromo />
            <ServicesSection />
            <KnowledgeHubSection />
            <PartnerSection />
            <BooksSection />
            <SearchPreviewSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Refund Policy Modal */}
      <Dialog open={refundOpen} onOpenChange={setRefundOpen}>
        <DialogContent className="w-[95vw] h-[90vh] max-w-[95vw] sm:w-auto sm:h-auto sm:max-w-2xl p-0 flex flex-col gap-0">
          <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 border-b border-gray-200 flex-shrink-0">
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900 pr-8">
              Refund & Cancellation Policy
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 modal-scrollbar">
            <div className="text-sm sm:text-base leading-relaxed text-gray-700 whitespace-pre-wrap break-words">
              {refundMarkdown || 'Loading policy...'}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {renderCurrentSection()}
      <Footer />
    </div>
  );
}

export default App;
