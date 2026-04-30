import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from './context/ConfigContext';
import { Home } from './Home';
import { AdminPanel } from './components/AdminPanel';
import { Login } from './components/Login';

const AdminRoute: React.FC<{ isAuthenticated: boolean; children: React.ReactNode }> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) return <Navigate to="/admin/login" />;
  return (
    <>
      {children}
    </>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/admin/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/admin" /> : 
              <Login onLogin={() => setIsAuthenticated(true)} />
            } 
          />
          <Route 
            path="/admin" 
            element={
              <AdminRoute isAuthenticated={isAuthenticated}>
                <AdminPanel />
              </AdminRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}
