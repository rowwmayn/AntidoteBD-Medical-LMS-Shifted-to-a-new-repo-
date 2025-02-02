import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Home, Products, MyProducts, Profile, Tests } from './pages';
import { Loading } from './components/ui/Loading';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
        setUser(data.user);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleNavigation = (path) => {
    setCurrentPage(path);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setUser(null);
      setCurrentPage('home');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setIsAuthenticated(true);
      setUser(data.user);
      setCurrentPage('home');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'my-products':
        return isAuthenticated ? <MyProducts /> : <LoginForm onLogin={handleLogin} />;
      case 'profile':
        return isAuthenticated ? <Profile user={user} /> : <LoginForm onLogin={handleLogin} />;
      case 'tests':
        return isAuthenticated ? <Tests /> : <LoginForm onLogin={handleLogin} />;
      case 'login':
        return <LoginForm onLogin={handleLogin} />;
      case 'signup':
        return <SignupForm onSignup={handleLogin} />;
      default:
        return <Home />;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isAuthenticated={isAuthenticated}
        userInfo={user}
        onNavigate={handleNavigation}
        onLogout={handleLogout}
      />
      <main className="container-custom py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
