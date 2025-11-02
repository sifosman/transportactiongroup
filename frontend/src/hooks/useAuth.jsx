import { createContext, useContext, useState, useEffect } from 'react';
import { checkMoodleAuth, loginWithMoodle, logoutFromMoodle } from '../services/moodleAuth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Core auth check
  const runAuthCheck = async () => {
    try {
      const { isAuthenticated: ok, user: u } = await checkMoodleAuth();
      setIsAuthenticated(!!ok);
      setUser(u || null);
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial check + light retry; re-check on focus/visibility change
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      await runAuthCheck();
      // If not authenticated on first try, retry once after a short delay (handles race after redirects)
      if (!cancelled && !isAuthenticated) {
        setTimeout(() => {
          if (!cancelled) runAuthCheck();
        }, 800);
      }
    };
    init();

    const onFocus = () => runAuthCheck();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') runAuthCheck();
    };
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelled = true;
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const login = () => {
    loginWithMoodle();
  };

  const logout = async () => {
    await logoutFromMoodle();
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
