import { createContext, useContext, useState, useEffect } from 'react';
import { checkMoodleAuth, loginWithMoodle, logoutFromMoodle } from '../services/moodleAuth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const { isAuthenticated, user } = await checkMoodleAuth();
        setIsAuthenticated(isAuthenticated);
        setUser(user);
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
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
