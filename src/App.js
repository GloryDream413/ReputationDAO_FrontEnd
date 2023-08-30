import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Collectemail, Principle, Criteria } from './components'
import { useState, createContext } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserContext = createContext(null)
const App = () => {
  const [nftRoute, setNftRoute] = useState('')
  return (
    <UserContext.Provider value={{ nftRoute, setNftRoute }}>
      <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/collectemail" element={<Collectemail />} />
            <Route path="/principle" element={<Principle />} />
            <Route path="/criteria" element={<Criteria />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={3000} draggableDirection='x' />
    </UserContext.Provider>
  );
}
export default App