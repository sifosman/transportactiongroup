/**
 * Moodle Authentication Service
 * Handles SSO integration with Moodle LMS
 */

const MOODLE_URL = import.meta.env.VITE_MOODLE_URL || 'https://learning.transportactiongroup.com';
const API_BASE = import.meta.env.VITE_API_BASE || 'https://api.transportactiongroup.com';

/**
 * Check if user is authenticated with Moodle
 * @returns {Promise<{isAuthenticated: boolean, user: object|null}>}
 */
export async function checkMoodleAuth() {
  try {
    const response = await fetch(`${API_BASE}/auth/check`, {
      method: 'GET',
      credentials: 'include', // Include cookies for session
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { isAuthenticated: false, user: null };
    }

    const data = await response.json();
    return {
      isAuthenticated: data.authenticated || false,
      user: data.user || null,
    };
  } catch (error) {
    console.error('Auth check failed:', error);
    return { isAuthenticated: false, user: null };
  }
}

/**
 * Get Moodle login URL
 * @param {string} returnUrl - URL to return to after login
 * @returns {string}
 */
export function getMoodleLoginUrl(returnUrl = window.location.href) {
  const params = new URLSearchParams({
    returnurl: returnUrl,
  });
  return `${MOODLE_URL}/login/index.php?${params.toString()}`;
}

/**
 * Initiate SSO login
 * @param {string} returnUrl - URL to return to after login
 */
export function loginWithMoodle(returnUrl = window.location.href) {
  window.location.href = getMoodleLoginUrl(returnUrl);
}

/**
 * Logout from Moodle
 */
export async function logoutFromMoodle() {
  try {
    await fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    // Redirect to Moodle logout
    window.location.href = `${MOODLE_URL}/login/logout.php`;
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

/**
 * Save TCO calculation for authenticated user
 * @param {object} calculation - Calculation data to save
 * @returns {Promise<{success: boolean, id: string|null}>}
 */
export async function saveCalculation(calculation) {
  try {
    const response = await fetch(`${API_BASE}/tco/save`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calculation),
    });

    if (!response.ok) {
      throw new Error('Failed to save calculation');
    }

    const data = await response.json();
    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    console.error('Save calculation failed:', error);
    return {
      success: false,
      id: null,
      error: error.message,
    };
  }
}

/**
 * Get user's calculation history
 * @param {number} limit - Number of calculations to fetch
 * @returns {Promise<Array>}
 */
export async function getCalculationHistory(limit = 10) {
  try {
    const response = await fetch(`${API_BASE}/tco/history?limit=${limit}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch history');
    }

    const data = await response.json();
    return data.calculations || [];
  } catch (error) {
    console.error('Fetch history failed:', error);
    return [];
  }
}

/**
 * Delete a saved calculation
 * @param {string} calculationId - ID of calculation to delete
 * @returns {Promise<boolean>}
 */
export async function deleteCalculation(calculationId) {
  try {
    const response = await fetch(`${API_BASE}/tco/delete/${calculationId}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    return response.ok;
  } catch (error) {
    console.error('Delete calculation failed:', error);
    return false;
  }
}

/**
 * Update calculation notes
 * @param {string} calculationId - ID of calculation
 * @param {string} notes - Updated notes
 * @returns {Promise<boolean>}
 */
export async function updateCalculationNotes(calculationId, notes) {
  try {
    const response = await fetch(`${API_BASE}/tco/update/${calculationId}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notes }),
    });

    return response.ok;
  } catch (error) {
    console.error('Update notes failed:', error);
    return false;
  }
}
