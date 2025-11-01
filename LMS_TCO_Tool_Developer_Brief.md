LMS Integration Brief: 
Electric Truck TCO Comparator Tool
Project Overview
Objective: Integrate a comprehensive Electric Truck Total Cost of Ownership (TCO) Comparator Tool into the existing LMS platform with user authentication, regional corridor support, and calculation history management.
Target Markets: Ethiopia, Kenya, Tanzania, and South Africa with corridor-specific analysis and native currency support. Next iteration will be Port and Urban logistics for each country.
Core Requirements
1. User Registration, Authentication & Profiling System
User Registration & Login
- Secure Authentication: Email/password with password strength requirements
- Profile Creation: Comprehensive user profiling form upon first login
- Session Management: Persistent login sessions with secure token management
- Data Partnership: Agreement for input data and calculations to be used anonymously for industry development and research purposes. 
- Password Recovery: Email-based password reset functionality
User Profile Form Fields
Profile Information:
- Full Name
- Email Address
- Phone Number
- Job Title/Position
- Company/Organization Name
- Country/Region
Professional Background:
- Years of experience in transport/logistics
- Fleet size (Number of trucks, light, medium and heavy duty)
- Primary cargo types
- LSP or carry own cargo
- Annual freight volume (tonnes)
- Primary operating corridors
Interest Areas:
- Electric vehicle adoption timeline
- What cost saving % will trigger a transition to electric trucks?
- what are the barriers to adoption in your region?
- Preferred communication language
2. Regional Corridor Configuration
Supported Corridors & Currencies
Ethiopia - Addis Ababa to Djibouti Corridor
- Currency: Ethiopian Birr (ETB)
- Distance: …………… km (default 950km)
Kenya - Mombasa to Nairobi Corridor
- Currency: Kenyan Shilling (KES)
- Distance: ………. Km (default 480 km)
Tanzania - Central Corridor (Dar es Salaam to Kampala)
- Currency: Tanzanian Shilling (TZS)
- Distance: …….. km (Default 1420 km)
South Africa - N3 Corridor (Durban to Johannesburg)
- Currency: South African Rand (ZAR)
- Distance: …….. km (default 580km)
Regional Input Parameters (Per Corridor)
- As per excel sample template
3. TCO Calculation Engine
Input Parameters (in the excel template)
Vehicle Specifications: Baseline truck and Electric truck
Financial Parameters:
Operational Parameters:
Infrastructure Parameters:
Calculation Logic (in the excel template)
Total Cost Components:
1. Capital Costs
2. Operational Costs
3. Infrastructure Costs
Output Calculations
- 10-Year TCO Comparison: Diesel vs Electric
- Break-even Analysis: Payback period
- Annual Cost Breakdown: Year-by-year analysis
- Environmental Impact: CO2 emissions comparison
- Financial Metrics: cost per km, total lifetime costs
4. Results Management System
Calculation History per User Profile
- Save Calculations: Each TCO analysis saved with timestamp
- Calculation Notes: User-added notes for each iteration
- Comparison Views: Side-by-side comparison of saved calculations
- Export Options: PDF reports, 
- Sharing Capabilities: Share results via email
Results Dashboard
- Recent Calculations: Quick access to last 10 calculations
- Favorite Scenarios: Bookmark important calculations
- Implementation Analysis: Upload actual data of implementation for comparison
6. Integration with Existing LMS
Single Sign-On (SSO)
- Unified Authentication: Use existing LMS user accounts
- Profile Synchronization: Sync user data between systems
- Permission Management: Role-based access control
Course Integration
- TCO Tool Access: Available to Electric Fleet Transformation course enrollees as well as public
- Intro to the tool video (can be in the LMS, or separate)
- Progress Tracking: Tool usage counts toward course completion
- Assessment Integration: TCO calculations as course assignments
7. Data Sources & References
Excel Calculator Integration
**Provided Files** (to be supplied by client):
- `Ethiopia_TCO_Calculator.xlsx`
- `Kenya_TCO_Calculator.xlsx`
- `Tanzania_TCO_Calculator.xlsx`
- `South_Africa_TCO_Calculator.xlsx`
8. User Experience Workflow
New User Journey
1. Registration: Create account with email verification
2. Profile Setup: Complete comprehensive profiling form
3. Corridor Selection: Choose primary operating corridor
4. Tutorial: Video tour of TCO tool features
5. First Calculation: Step-by-step assistance for initial analysis
Returning User Journey
1. Login: Quick authentication
2. Dashboard: Overview of recent calculations and saved scenarios
3. New Calculation: Streamlined input with saved preferences
4. Results Review: Compare with previous calculations
5. Export/Share: Generate reports for stakeholders
9. Reporting & Analytics
User Reports
- Detailed outputs (input/output and comparison summary as per excel template)
Administrative Analytics
- Usage Statistics: Tool adoption and engagement metrics
- Regional Insights: Popular corridors and calculation patterns
- Course Integration: Impact on course completion rates
- User Feedback: Satisfaction and improvement suggestions
Note: This brief should be read in conjunction with the provided Excel TCO calculators for each region, which contain the detailed calculation logic and regional parameters to be implemented in the web-based tool.