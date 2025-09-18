import React, { useState, useEffect } from 'react';
import './App.css';
import { Search, Users, BookOpen, Award, Truck, Leaf, Building, Globe, Star, Download, Eye, MapPin, Calendar, Clock, CheckCircle, User, Mail, Lock, Phone, FileText, Upload, ExternalLink } from 'lucide-react';

// Import assets
import tagLogo from './assets/TAGhiresblack.png';
import roadFreightCover from './assets/road_freight_sustainability_cover.png';
import truckDriverCover from './assets/truck_driver_handbook_cover.png';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showRegistry, setShowRegistry] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', phone: '', role: 'driver' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Moodle Integration Configuration
  const MOODLE_URL = process.env.REACT_APP_MOODLE_URL || 'https://learning.transportactiongroup.com';
  const SSO_ENDPOINT = process.env.REACT_APP_SSO_ENDPOINT || '/auth/sso';
  const API_BASE = process.env.REACT_APP_API_BASE || 'https://api.transportactiongroup.com';
  
  // Check for existing authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('tag_auth_token');
    const userData = localStorage.getItem('tag_user_data');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);
  
  // Handle login with Moodle SSO
  const handleMoodleLogin = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('tag_auth_token', data.token);
        localStorage.setItem('tag_user_data', JSON.stringify(data.user));
        setIsLoggedIn(true);
        setUser(data.user);
        setCurrentSection('home');
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message || 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };
  
  // Handle registration with Moodle user creation
  const handleMoodleRegistration = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('tag_auth_token', data.token);
        localStorage.setItem('tag_user_data', JSON.stringify(data.user));
        setIsLoggedIn(true);
        setUser(data.user);
        setCurrentSection('home');
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message || 'Registration failed' };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('tag_auth_token');
    localStorage.removeItem('tag_user_data');
    setIsLoggedIn(false);
    setUser(null);
    setCurrentSection('home');
  };
  
  // Redirect to Moodle course with SSO
  const redirectToMoodleCourse = (courseId, courseName) => {
    const token = localStorage.getItem('tag_auth_token');
    if (token) {
      // Open Moodle course in new tab with SSO token
      window.open(`${MOODLE_URL}/course/view.php?id=${courseId}&sso_token=${token}`, '_blank');
    } else {
      alert('Please login to access the course');
      setCurrentSection('login');
    }
  };
  
  // Enroll in course with payment
  const enrollInCourse = async (courseId, courseName, price) => {
    const token = localStorage.getItem('tag_auth_token');
    if (!token) {
      alert('Please login to enroll in courses');
      setCurrentSection('login');
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE}/courses/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ courseId, courseName, price }),
      });
      
      if (response.ok) {
        const data = await response.json();
        // Redirect to payment gateway
        window.location.href = data.paymentUrl;
      } else {
        alert('Enrollment failed. Please try again.');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Connection error. Please try again.');
    }
  };

  // Certified Professional Drivers Registry (same as before)
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
      location: "Johannesburg",
      experience: "7 years",
      rating: 4.9,
      specialization: "Heavy load transport",
      avatar: "JW",
      priorEducation: "Grade 12, NQF 5 Heavy Vehicle Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-003", completed: "2024-02-05" },
        { name: "Heavy Load Specialist", certNumber: "HLS-2024-003", completed: "2024-03-15" }
      ]
    },
    {
      id: 4,
      name: "Robert Davis",
      role: "Driver",
      location: "Port Elizabeth",
      experience: "4 years",
      rating: 4.6,
      specialization: "Cold chain logistics",
      avatar: "RD",
      priorEducation: "Grade 10, NQF 3 Cold Chain Management",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-004", completed: "2024-02-10" },
        { name: "Cold Chain Specialist", certNumber: "CCS-2024-004", completed: "2024-03-20" }
      ]
    },
    {
      id: 5,
      name: "William Miller",
      role: "Driver",
      location: "Bloemfontein",
      experience: "6 years",
      rating: 4.8,
      specialization: "Fuel transport",
      avatar: "WM",
      priorEducation: "Grade 12, NQF 4 Dangerous Goods",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-005", completed: "2024-02-15" },
        { name: "Fuel Transport Specialist", certNumber: "FTS-2024-005", completed: "2024-03-25" }
      ]
    },
    {
      id: 6,
      name: "Charles Anderson",
      role: "Driver",
      location: "Pretoria",
      experience: "8 years",
      rating: 4.9,
      specialization: "International transport",
      avatar: "CA",
      priorEducation: "Grade 12, NQF 6 International Logistics",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-006", completed: "2024-02-20" },
        { name: "International Transport Specialist", certNumber: "ITS-2024-006", completed: "2024-04-01" }
      ]
    },
    {
      id: 7,
      name: "Thomas Jackson",
      role: "Driver",
      location: "East London",
      experience: "5 years",
      rating: 4.7,
      specialization: "Container transport",
      avatar: "TJ",
      priorEducation: "Grade 11, NQF 4 Container Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-007", completed: "2024-02-25" },
        { name: "Container Specialist", certNumber: "CS-2024-007", completed: "2024-04-05" }
      ]
    },
    {
      id: 8,
      name: "Christopher White",
      role: "Driver",
      location: "Kimberley",
      experience: "4 years",
      rating: 4.6,
      specialization: "Mining transport",
      avatar: "CW",
      priorEducation: "Grade 12, NQF 5 Mining Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-008", completed: "2024-03-01" },
        { name: "Mining Transport Specialist", certNumber: "MTS-2024-008", completed: "2024-04-10" }
      ]
    },
    {
      id: 9,
      name: "Daniel Harris",
      role: "Driver",
      location: "Polokwane",
      experience: "6 years",
      rating: 4.8,
      specialization: "Agricultural transport",
      avatar: "DH",
      priorEducation: "Grade 10, NQF 3 Agricultural Logistics",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-009", completed: "2024-03-05" },
        { name: "Agricultural Specialist", certNumber: "AS-2024-009", completed: "2024-04-15" }
      ]
    },
    {
      id: 10,
      name: "Matthew Martin",
      role: "Driver",
      location: "Nelspruit",
      experience: "7 years",
      rating: 4.9,
      specialization: "Cross-border transport",
      avatar: "MM",
      priorEducation: "Grade 12, NQF 6 Cross-Border Operations",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-010", completed: "2024-03-10" },
        { name: "Cross-Border Specialist", certNumber: "CBS-2024-010", completed: "2024-04-20" }
      ]
    },
    {
      id: 11,
      name: "Anthony Thompson",
      role: "Driver",
      location: "George",
      experience: "5 years",
      rating: 4.7,
      specialization: "Timber transport",
      avatar: "AT",
      priorEducation: "Grade 11, NQF 4 Forestry Logistics",
      qualifications: [
        { name: "Professional Truck Driver Certification", certNumber: "PTD-2024-011", completed: "2024-03-15" },
        { name: "Timber Transport Specialist", certNumber: "TTS-2024-011", completed: "2024-04-25" }
      ]
    }
  ];

  // Certified Green Freight Managers Registry
  const certifiedManagers = [
    {
      id: 12,
      name: "Sarah Williams",
      role: "Manager",
      location: "Cape Town",
      experience: "8 years",
      rating: 4.9,
      specialization: "Fleet optimization",
      avatar: "SW",
      priorEducation: "NQF 7 Bachelor of Logistics, NQF 8 Honours Transport Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-001", completed: "2024-01-10" },
        { name: "Fleet Optimization Specialist", certNumber: "FOS-2024-001", completed: "2024-02-15" }
      ]
    },
    {
      id: 13,
      name: "Jennifer Garcia",
      role: "Manager",
      location: "Durban",
      experience: "6 years",
      rating: 4.8,
      specialization: "Sustainability consultant",
      avatar: "JG",
      priorEducation: "NQF 7 Bachelor of Environmental Science, NQF 8 Masters in Sustainability",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-002", completed: "2024-01-15" },
        { name: "Sustainability Excellence Specialist", certNumber: "SES-2024-002", completed: "2024-02-20" }
      ]
    },
    {
      id: 14,
      name: "Lisa Rodriguez",
      role: "Manager",
      location: "Johannesburg",
      experience: "10 years",
      rating: 4.9,
      specialization: "Operations excellence",
      avatar: "LR",
      priorEducation: "NQF 7 Bachelor of Operations Management, NQF 9 PhD Operations Research",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-003", completed: "2024-01-20" },
        { name: "Operations Excellence Specialist", certNumber: "OES-2024-003", completed: "2024-02-25" }
      ]
    },
    {
      id: 15,
      name: "Michelle Lewis",
      role: "Manager",
      location: "Port Elizabeth",
      experience: "7 years",
      rating: 4.8,
      specialization: "Carbon management",
      avatar: "ML",
      priorEducation: "NQF 7 Bachelor of Environmental Management, NQF 8 Masters Carbon Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-004", completed: "2024-01-25" },
        { name: "Carbon Management Specialist", certNumber: "CMS-2024-004", completed: "2024-03-01" }
      ]
    },
    {
      id: 16,
      name: "Kimberly Lee",
      role: "Manager",
      location: "Bloemfontein",
      experience: "9 years",
      rating: 4.9,
      specialization: "Supply chain optimization",
      avatar: "KL",
      priorEducation: "NQF 7 Bachelor of Supply Chain, NQF 8 Honours Logistics Management",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-005", completed: "2024-01-30" },
        { name: "Supply Chain Excellence Specialist", certNumber: "SCES-2024-005", completed: "2024-03-05" }
      ]
    },
    {
      id: 17,
      name: "Donna Walker",
      role: "Manager",
      location: "Pretoria",
      experience: "11 years",
      rating: 4.9,
      specialization: "Technology integration",
      avatar: "DW",
      priorEducation: "NQF 7 Bachelor of Information Systems, NQF 8 Masters Transport Technology",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-006", completed: "2024-02-05" },
        { name: "Technology Integration Specialist", certNumber: "TIS-2024-006", completed: "2024-03-10" }
      ]
    },
    {
      id: 18,
      name: "Carol Hall",
      role: "Manager",
      location: "East London",
      experience: "8 years",
      rating: 4.8,
      specialization: "Regulatory compliance",
      avatar: "CH",
      priorEducation: "NQF 7 Bachelor of Law, NQF 8 Honours Transport Law",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-007", completed: "2024-02-10" },
        { name: "Compliance Excellence Specialist", certNumber: "CES-2024-007", completed: "2024-03-15" }
      ]
    },
    {
      id: 19,
      name: "Ruth Allen",
      role: "Manager",
      location: "Kimberley",
      experience: "6 years",
      rating: 4.7,
      specialization: "Risk management",
      avatar: "RA",
      priorEducation: "NQF 7 Bachelor of Risk Management, NQF 8 Masters Transport Safety",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-008", completed: "2024-02-15" },
        { name: "Risk Management Specialist", certNumber: "RMS-2024-008", completed: "2024-03-20" }
      ]
    },
    {
      id: 20,
      name: "Sharon Young",
      role: "Manager",
      location: "Polokwane",
      experience: "9 years",
      rating: 4.8,
      specialization: "Performance analytics",
      avatar: "SY",
      priorEducation: "NQF 7 Bachelor of Data Science, NQF 8 Masters Business Analytics",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-009", completed: "2024-02-20" },
        { name: "Analytics Excellence Specialist", certNumber: "AES-2024-009", completed: "2024-03-25" }
      ]
    },
    {
      id: 21,
      name: "Laura King",
      role: "Manager",
      location: "Nelspruit",
      experience: "7 years",
      rating: 4.8,
      specialization: "Quality assurance",
      avatar: "LK",
      priorEducation: "NQF 7 Bachelor of Quality Management, NQF 8 Six Sigma Black Belt",
      qualifications: [
        { name: "Green Freight Professional Certification", certNumber: "GFP-2024-010", completed: "2024-02-25" },
        { name: "Quality Assurance Specialist", certNumber: "QAS-2024-010", completed: "2024-03-30" }
      ]
    }
  ];

  // Rest of the component code remains the same, but with updated course enrollment buttons
  // that call enrollInCourse() function

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={tagLogo} alt="TAG Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentSection('home')} 
              className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'home' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:text-green-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById('knowledge-hub')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Knowledge Hub
            </button>
            <button 
              onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Partner with Us
            </button>
            <button 
              onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Books
            </button>
            <button 
              onClick={() => setCurrentSection('search')} 
              className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'search' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Search Professionals
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user?.name}</span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setCurrentSection('login')} 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${currentSection === 'login' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setCurrentSection('register')} 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${currentSection === 'register' ? 'bg-orange-100 text-orange-700' : 'bg-orange-600 text-white hover:bg-orange-700'}`}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  // Updated Knowledge Hub Section with Moodle integration
  const KnowledgeHubSection = () => (
    <div id="knowledge-hub" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certification programs designed to advance your career in sustainable road freight
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Truck Driving Program */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Professional Truck Driving Program</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$99 <span className="text-lg font-normal text-gray-600">one-time fee</span></div>
              <p className="text-gray-600">Based on "The Professional Truck Driver's Handbook"</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>20 interactive 5-minute modules (100 minutes total)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Module evaluations (5 questions each, 4/5 to pass)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Free online evaluation system</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Free downloadable certificate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>1-year free registry listing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Mobile-optimized platform</span>
              </div>
            </div>

            <div className="space-y-3">
              {isLoggedIn ? (
                <button 
                  onClick={() => enrollInCourse(1, 'Professional Truck Driving Program', 99)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Enroll Now - $99
                </button>
              ) : (
                <button 
                  onClick={() => setCurrentSection('login')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Login to Enroll
                </button>
              )}
              <button 
                onClick={() => redirectToMoodleCourse(1, 'Professional Truck Driving Program')}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Preview Course
              </button>
            </div>
          </div>

          {/* Green Freight Professional Program */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Leaf className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Green Freight Professional Program</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-green-600 mb-2">$199 <span className="text-lg font-normal text-gray-600">one-time fee</span></div>
              <p className="text-gray-600">Advanced certification for fleet managers and executives</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>20 comprehensive 15-minute modules (300 minutes total)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Advanced assessment system (5 questions each, 4/5 to pass)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Free online evaluation system</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Free downloadable certificate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>1-year free registry listing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Executive-level content and case studies</span>
              </div>
            </div>

            <div className="space-y-3">
              {isLoggedIn ? (
                <button 
                  onClick={() => enrollInCourse(2, 'Green Freight Professional Program', 199)}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Enroll Now - $199
                </button>
              ) : (
                <button 
                  onClick={() => setCurrentSection('login')}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Login to Enroll
                </button>
              )}
              <button 
                onClick={() => redirectToMoodleCourse(2, 'Green Freight Professional Program')}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Preview Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Login Section with Moodle integration
  const LoginSection = () => {
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
      const result = await handleMoodleLogin(loginForm);
      if (!result.success) {
        setError(result.error);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={tagLogo} alt="TAG Logo" className="mx-auto h-16 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your courses and professional profile
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="pl-10 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="text-center">
                <button
                  onClick={() => setCurrentSection('register')}
                  className="text-blue-600 hover:text-blue-500 text-sm"
                >
                  Don't have an account? Register here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // The rest of the components remain the same but with updated integration points
  // I'll include the key sections here for brevity

  // Main render function
  if (currentSection === 'login') return <LoginSection />;
  if (currentSection === 'register') return <RegisterSection />;
  if (currentSection === 'search') return <SearchSection />;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={tagLogo} alt="TAG Logo" className="mx-auto h-40 w-auto mb-8" />
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
              Reducing Road Freight Emissions - Transformation to Net Zero
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading the transformation to sustainable road freight operations through professional training, certification, and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Our Services
              </button>
              <button 
                onClick={() => document.getElementById('knowledge-hub')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Access Knowledge Hub
              </button>
              <button 
                onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">21</div>
              <div className="text-gray-600">Total Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">11</div>
              <div className="text-gray-600">Certified Drivers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">10</div>
              <div className="text-gray-600">Certified Managers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">42</div>
              <div className="text-gray-600">Certifications Issued</div>
            </div>
          </div>
        </div>
      </div>

      {/* Include all other sections */}
      <ServicesSection />
      <KnowledgeHubSection />
      <PartnerSection />
      <BooksSection />
      <SearchPreviewSection />
      <Footer />
    </div>
  );
}

export default App;

