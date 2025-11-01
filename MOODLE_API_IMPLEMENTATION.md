# Moodle API Implementation Guide for TCO Calculator

This document outlines the backend API endpoints that need to be implemented in Moodle to support the TCO Calculator authentication and data storage features.

## Overview

The TCO Calculator frontend expects these API endpoints to be available at: `https://learning.transportactiongroup.com/webservice`

All endpoints should:
- Use JSON for request/response bodies
- Include proper CORS headers to allow requests from the frontend domain
- Use Moodle's session-based authentication (cookies)
- Return consistent error responses

## Required API Endpoints

### 1. Check Authentication Status

**Endpoint:** `GET /auth/check`

**Purpose:** Verify if the user has an active Moodle session

**Request:**
- Method: GET
- Credentials: include (cookies)
- Headers: `Content-Type: application/json`

**Response (Authenticated):**
```json
{
  "authenticated": true,
  "user": {
    "id": 123,
    "username": "john.doe",
    "email": "john.doe@example.com",
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

**Response (Not Authenticated):**
```json
{
  "authenticated": false,
  "user": null
}
```

**Implementation Notes:**
- Check for valid Moodle session cookie
- Use Moodle's `$USER` global object
- Return user profile data from `mdl_user` table

---

### 2. Save TCO Calculation

**Endpoint:** `POST /tco/save`

**Purpose:** Save a TCO calculation to the user's account

**Request:**
- Method: POST
- Credentials: include (cookies)
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "id": 1730000000000,
  "name": "South Africa N3 - Fleet Analysis",
  "notes": "Initial assessment for fleet electrification",
  "corridor": "south-africa",
  "inputs": {
    "corridorName": "South Africa",
    "currency": "ZAR",
    "currencySymbol": "R",
    "distanceOneWay": 600,
    "interestRate": 0.105,
    "loanTerm": 5,
    ...
  },
  "results": {
    "diesel": {...},
    "electric": {...},
    "comparison": {...},
    "breakEven": {...},
    "environmental": {...}
  },
  "timestamp": "2024-11-01T10:00:00.000Z"
}
```

**Response (Success):**
```json
{
  "success": true,
  "id": "abc123",
  "message": "Calculation saved successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "User not authenticated"
}
```

**Implementation Notes:**
- Verify user is authenticated
- Store in custom Moodle database table: `mdl_tco_calculations`
- Save user_id, calculation_data (JSON), name, notes, timestamp
- Return unique calculation ID

**Database Schema:**
```sql
CREATE TABLE mdl_tco_calculations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    userid BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    notes TEXT,
    corridor VARCHAR(50),
    calculation_data LONGTEXT NOT NULL,
    timecreated BIGINT NOT NULL,
    timemodified BIGINT NOT NULL,
    FOREIGN KEY (userid) REFERENCES mdl_user(id)
);
```

---

### 3. Get Calculation History

**Endpoint:** `GET /tco/history?limit=10`

**Purpose:** Retrieve user's saved calculations

**Request:**
- Method: GET
- Credentials: include (cookies)
- Query Parameters:
  - `limit` (optional): Number of results to return (default: 10)

**Response:**
```json
{
  "calculations": [
    {
      "id": "abc123",
      "name": "South Africa N3 - Fleet Analysis",
      "notes": "Initial assessment",
      "corridor": "south-africa",
      "timestamp": "2024-11-01T10:00:00.000Z",
      "inputs": {...},
      "results": {...}
    },
    {
      "id": "def456",
      "name": "Kenya Corridor - Comparison",
      "notes": "",
      "corridor": "kenya",
      "timestamp": "2024-10-30T15:30:00.000Z",
      "inputs": {...},
      "results": {...}
    }
  ]
}
```

**Implementation Notes:**
- Verify user is authenticated
- Query `mdl_tco_calculations` WHERE userid = current_user
- Order by timemodified DESC
- Apply limit
- Parse JSON calculation_data for each record

---

### 4. Delete Calculation

**Endpoint:** `DELETE /tco/delete/{calculationId}`

**Purpose:** Delete a saved calculation

**Request:**
- Method: DELETE
- Credentials: include (cookies)
- URL Parameter: `calculationId` - ID of the calculation to delete

**Response (Success):**
```json
{
  "success": true,
  "message": "Calculation deleted"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Calculation not found or access denied"
}
```

**Implementation Notes:**
- Verify user is authenticated
- Verify calculation belongs to current user
- Delete from `mdl_tco_calculations`

---

### 5. Update Calculation Notes

**Endpoint:** `PATCH /tco/update/{calculationId}`

**Purpose:** Update notes for a saved calculation

**Request:**
- Method: PATCH
- Credentials: include (cookies)
- Headers: `Content-Type: application/json`
- URL Parameter: `calculationId`
- Body:
```json
{
  "notes": "Updated notes here"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Notes updated"
}
```

**Implementation Notes:**
- Verify user is authenticated
- Verify calculation belongs to current user
- Update notes field and timemodified
- Return success response

---

### 6. Logout

**Endpoint:** `POST /auth/logout`

**Purpose:** End the user's Moodle session

**Request:**
- Method: POST
- Credentials: include (cookies)

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Implementation Notes:**
- Call Moodle's logout functionality
- Clear session cookies
- Redirect to Moodle logout page is handled by frontend

---

## Implementation Approach

### Option 1: Moodle Web Services (Recommended)

Use Moodle's built-in web services framework:

1. **Enable Web Services in Moodle:**
   - Site administration → Advanced features → Enable web services
   - Create custom web service functions for TCO calculator

2. **Create Custom External Functions:**
   - File: `local/tco/externallib.php`
   - Implement functions for each endpoint
   - Define function parameters and return values

3. **Example External Function:**
```php
<?php
class local_tco_external extends external_api {
    
    public static function save_calculation_parameters() {
        return new external_function_parameters([
            'name' => new external_value(PARAM_TEXT, 'Calculation name'),
            'notes' => new external_value(PARAM_TEXT, 'Calculation notes'),
            'corridor' => new external_value(PARAM_TEXT, 'Corridor ID'),
            'data' => new external_value(PARAM_RAW, 'Calculation JSON data')
        ]);
    }
    
    public static function save_calculation($name, $notes, $corridor, $data) {
        global $DB, $USER;
        
        // Validate user is logged in
        require_login();
        
        // Save to database
        $record = new stdClass();
        $record->userid = $USER->id;
        $record->name = $name;
        $record->notes = $notes;
        $record->corridor = $corridor;
        $record->calculation_data = $data;
        $record->timecreated = time();
        $record->timemodified = time();
        
        $id = $DB->insert_record('tco_calculations', $record);
        
        return [
            'success' => true,
            'id' => $id
        ];
    }
    
    public static function save_calculation_returns() {
        return new external_single_structure([
            'success' => new external_value(PARAM_BOOL, 'Success status'),
            'id' => new external_value(PARAM_INT, 'Calculation ID')
        ]);
    }
}
```

### Option 2: Custom Plugin

Create a custom Moodle local plugin (`local_tco`):

1. **Plugin Structure:**
```
moodle/local/tco/
├── db/
│   ├── install.xml (database schema)
│   └── services.php (web service definitions)
├── classes/
│   ├── external.php (web service functions)
│   └── api.php (business logic)
├── version.php
└── lang/en/local_tco.php
```

2. **Create REST Endpoint Wrapper:**
   - Handle authentication checks
   - Parse JSON requests
   - Call appropriate functions
   - Return JSON responses

---

## CORS Configuration

The Moodle server needs to allow CORS requests from the frontend:

**In Moodle config.php or .htaccess:**
```php
header('Access-Control-Allow-Origin: https://transportactiongroup.vercel.app');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

Or in Moodle plugin:
```php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
```

---

## Authentication Flow

1. **User on frontend clicks "Sign In"**
   - Frontend redirects to: `https://learning.transportactiongroup.com/login/index.php?returnurl=...`

2. **User logs in to Moodle**
   - Moodle creates session
   - Sets session cookie

3. **Moodle redirects back to frontend**
   - User returns to calculator with active session

4. **Frontend checks auth status**
   - Calls `GET /auth/check`
   - If authenticated, shows user info banner

5. **User performs actions**
   - All requests include credentials (cookies)
   - Moodle validates session on each request

---

## Testing the Integration

### Test Auth Check:
```bash
curl -X GET https://learning.transportactiongroup.com/webservice/auth/check \
  -H "Content-Type: application/json" \
  --cookie "MoodleSession=abc123..."
```

### Test Save Calculation:
```bash
curl -X POST https://learning.transportactiongroup.com/webservice/tco/save \
  -H "Content-Type: application/json" \
  --cookie "MoodleSession=abc123..." \
  -d '{
    "name": "Test Calculation",
    "notes": "Testing API",
    "corridor": "south-africa",
    ...
  }'
```

---

## Security Considerations

1. **Session Validation:** Always verify the Moodle session is valid
2. **Data Ownership:** Ensure users can only access their own calculations
3. **Input Sanitization:** Validate and sanitize all user inputs
4. **SQL Injection:** Use Moodle's $DB API with parameterized queries
5. **XSS Protection:** Escape output when displaying user data
6. **Rate Limiting:** Consider rate limiting on save operations

---

## Next Steps

1. Create the Moodle database table for TCO calculations
2. Implement the web service functions in Moodle
3. Configure CORS headers
4. Test each endpoint individually
5. Test the full authentication flow from frontend to backend
6. Deploy and monitor

---

## Support

For Moodle plugin development:
- Moodle Developer Docs: https://docs.moodle.org/dev/
- Web Services API: https://docs.moodle.org/dev/Web_services
- External Functions: https://docs.moodle.org/dev/External_functions

For questions about the TCO Calculator frontend:
- See: `TCO_CALCULATOR_README.md`
- Frontend code: `frontend/src/services/moodleAuth.js`
