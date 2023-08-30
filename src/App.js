import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Collectemail, Principle, Criteria, Result } from './components'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
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
    </div>
  );
}
export default App