import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductionTracker from './components/ProductionTracker';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Extract token from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token') || urlParams.get('t') || urlParams.get('company');
    
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      // For demo purposes, use a default token if none provided
      setToken('demo-token-123');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <ProductionTracker token={token} />
    </div>
  );
}

export default App;