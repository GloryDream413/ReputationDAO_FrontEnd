import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Collectemail, Principle, Criteria, Result } from './components'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserContext = createContext(null)
const App = () => {
  const [walletAddress, SetWalletAddress] = useState('');
  return (
    <UserContext.Provider value={{ walletAddress, SetWalletAddress }}>
      <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/collectemail" element={<Collectemail />} />
            <Route path="/principle" element={<Principle />} />
            <Route path="/criteria" element={<Criteria />} />
            <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={3000} draggableDirection='x' />
    </UserContext.Provider>
  );
}
export default App