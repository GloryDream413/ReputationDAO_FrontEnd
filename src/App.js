import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Collectemail, Principle, Criteria, Result } from './components'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserContext = createContext(null)
const App = () => {
  const [walletAddress, SetWalletAddress] = useState('');
  const [email, SetEmail] = useState('');
  const [principle1, SetPrinciple1] = useState('');
  const [principle2, SetPrinciple2] = useState('');
  const [principle3, SetPrinciple3] = useState('');
  const [principle4, SetPrinciple4] = useState('');
  const [principle5, SetPrinciple5] = useState('');
  return (
    <UserContext.Provider value={{ walletAddress, SetWalletAddress, email, SetEmail, principle1, SetPrinciple1, principle2, SetPrinciple2, principle3, SetPrinciple3, principle4, SetPrinciple4, principle5, SetPrinciple5 }}>
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