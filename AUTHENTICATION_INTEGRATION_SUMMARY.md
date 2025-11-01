# TCO Calculator - Moodle Authentication Integration Summary

## What Was Implemented

### Frontend Changes

#### 1. Authentication Service (`frontend/src/services/moodleAuth.js`)
- `checkMoodleAuth()` - Check if user is logged into Moodle
- `loginWithMoodle()` - Redirect to Moodle login page
- `logoutFromMoodle()` - End Moodle session
- `saveCalculation()` - Save calculation to user account
- `getCalculationHistory()` - Fetch user's saved calculations
- `deleteCalculation()` - Delete a saved calculation
- `updateCalculationNotes()` - Update calculation notes

#### 2. Authentication Hook (`frontend/src/hooks/useAuth.jsx`)
- React Context Provider for authentication state
- Exports `useAuth()` hook for components
- Provides: `user`, `isAuthenticated`, `isLoading`, `login()`, `logout()`
- Automatically checks auth status on app load

#### 3. Updated Main App (`frontend/src/main.jsx`)
- Wrapped `<App />` with `<AuthProvider>`
- Makes authentication state available to all components

#### 4. Updated TCO Calculator (`frontend/src/components/TCOCalculator.jsx`)
- Added authentication UI banners:
  - **Guest users:** Blue banner encouraging sign-in with benefits
  - **Authenticated users:** Green welcome banner showing calculation count
- Updated save functionality:
  - **Authenticated:** Saves to Moodle backend + fallback to localStorage
  - **Guest:** Saves to localStorage only with prompt to sign in
- Added server calculation history loading for authenticated users
- Sign in/out buttons in banner

#### 5. Environment Configuration
- Created `.env` file with Moodle URLs
- Updated `.env.example` to use `VITE_` prefix (Vite standard)
- Variables:
  - `VITE_MOODLE_URL` - Moodle LMS URL
  - `VITE_API_BASE` - Moodle Web Service API URL

### Features

#### For Guest Users (Public Access)
✅ Full calculator functionality
✅ All corridor options available
✅ Local save to browser localStorage
✅ Print/export results
✅ Banner prompting to sign in for cloud save

#### For Authenticated Users (Logged into Moodle)
✅ All guest features PLUS:
✅ Save calculations to Moodle account
✅ Access calculation history from any device
✅ Add/edit notes on saved calculations
✅ Delete saved calculations
✅ Automatic sync across devices
✅ Welcome banner with name and calculation count

### User Experience Flow

#### Guest User:
1. Opens calculator
2. Sees blue "Sign in to save" banner
3. Completes calculation
4. Can save locally or click "Sign In"
5. If signs in → redirected to Moodle login → returns to calculator

#### Authenticated User:
1. Opens calculator (already logged into Moodle)
2. Sees green "Welcome back, [Name]!" banner
3. Calculations automatically save to account
4. Can access previous calculations
5. Can sign out when done

---

## What Still Needs to Be Done

### Backend Implementation (Moodle Side)

The frontend is complete and ready to integrate. The following backend work is required:

#### 1. Create Moodle Database Table
Run this SQL on your Moodle PostgreSQL database:

```sql
CREATE TABLE mdl_tco_calculations (
    id BIGSERIAL PRIMARY KEY,
    userid BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    notes TEXT,
    corridor VARCHAR(50),
    calculation_data TEXT NOT NULL,
    timecreated BIGINT NOT NULL,
    timemodified BIGINT NOT NULL,
    FOREIGN KEY (userid) REFERENCES mdl_user(id) ON DELETE CASCADE
);

CREATE INDEX idx_tco_userid ON mdl_tco_calculations(userid);
CREATE INDEX idx_tco_timemodified ON mdl_tco_calculations(timemodified);
```

#### 2. Implement Moodle Web Service Functions

Create a custom Moodle plugin or extend existing web services:

**Required Endpoints:**
- `GET /webservice/auth/check` - Verify user session
- `POST /webservice/tco/save` - Save calculation
- `GET /webservice/tco/history?limit=10` - Get calculation history
- `DELETE /webservice/tco/delete/{id}` - Delete calculation
- `PATCH /webservice/tco/update/{id}` - Update calculation notes
- `POST /webservice/auth/logout` - Logout

See `MOODLE_API_IMPLEMENTATION.md` for detailed specs and example code.

#### 3. Configure CORS Headers

Allow the frontend to make requests to Moodle:

```php
// In Moodle config or plugin
header('Access-Control-Allow-Origin: https://transportactiongroup.vercel.app');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

#### 4. Enable Moodle Web Services

In Moodle Admin:
1. Site administration → Advanced features → Enable web services ✓
2. Site administration → Server → Web services → Manage protocols → Enable REST ✓
3. Create a custom service for TCO Calculator
4. Add the TCO functions to the service
5. No token needed (using session-based auth)

---

## Testing Before Full Deployment

### Frontend-Only Testing (Current State)

You can deploy and test the frontend now. It will work with:
- ✅ Full calculator functionality
- ✅ Guest user experience
- ✅ Local storage saves
- ✅ Sign in button (redirects to Moodle login)
- ❌ Server saves (will fail gracefully and fall back to localStorage)
- ❌ Calculation history from server (will show 0)

### With Backend Implementation

Once Moodle API is implemented:
- ✅ User authentication detection
- ✅ Save to server
- ✅ Load calculation history
- ✅ Full authenticated user experience

---

## Deployment Instructions

### Deploy Frontend Now (Public Calculator Only)

```bash
# In frontend directory
git add -A
git commit -m "feat(auth): integrate Moodle SSO with TCO calculator

- Add authentication service and hook
- Show sign-in banner for guests
- Save to Moodle backend for authenticated users
- Fallback to localStorage if backend unavailable
- Display calculation history for authenticated users"

git push origin main
```

Vercel will auto-deploy the frontend.

### Environment Variables in Vercel

Add these in Vercel dashboard → Project Settings → Environment Variables:

```
VITE_MOODLE_URL=https://learning.transportactiongroup.com
VITE_API_BASE=https://learning.transportactiongroup.com/webservice
VITE_SITE_URL=https://transportactiongroup.vercel.app
VITE_CONTACT_EMAIL=transportactiongroup@gmail.com
```

### Deploy Backend (After Implementation)

1. Create the Moodle plugin following `MOODLE_API_IMPLEMENTATION.md`
2. Upload to Moodle server: `moodle/local/tco/`
3. Visit Moodle notifications to install
4. Configure CORS and web services
5. Test endpoints with curl or Postman
6. Update frontend `.env` if needed

---

## Current Status

- ✅ Frontend authentication UI complete
- ✅ Frontend service layer complete
- ✅ Guest user experience working
- ✅ Local storage fallback working
- ✅ Documentation complete
- ⏳ Backend API pending implementation
- ⏳ Full integration testing pending

---

## Files Changed/Created

### New Files:
- `frontend/src/services/moodleAuth.js` - Moodle API client
- `frontend/src/hooks/useAuth.jsx` - Authentication hook
- `frontend/.env` - Environment configuration
- `MOODLE_API_IMPLEMENTATION.md` - Backend API specs
- `AUTHENTICATION_INTEGRATION_SUMMARY.md` - This file

### Modified Files:
- `frontend/src/main.jsx` - Added AuthProvider
- `frontend/src/components/TCOCalculator.jsx` - Auth integration
- `frontend/.env.example` - Updated for Vite
- `frontend/src/App.css` - Cursor pointer fix

---

## Benefits of This Approach

### ✅ Phased Rollout
- Deploy calculator publicly immediately
- Add authentication features incrementally
- No blocking dependencies

### ✅ Graceful Degradation
- Works perfectly for guests
- Enhances experience for authenticated users
- Fallback to localStorage if backend unavailable

### ✅ Single Sign-On
- Uses existing Moodle accounts
- No duplicate user management
- Seamless LMS integration

### ✅ Data Ownership
- Users own their calculation data
- Stored in their Moodle profile
- Syncs across devices

---

## Next Steps

1. **Deploy frontend now** - Public calculator with auth UI
2. **Implement Moodle backend** - Follow API implementation guide
3. **Test integration** - Verify auth flow end-to-end
4. **Monitor usage** - Track guest vs authenticated users
5. **Iterate** - Add features like sharing, comparison views, etc.

---

## Support & Questions

- Frontend implementation: See this summary and code comments
- Backend API specs: See `MOODLE_API_IMPLEMENTATION.md`
- Moodle development: https://docs.moodle.org/dev/
- Contact: transportactiongroup@gmail.com
