import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authenticate from "./Authenticate";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Authenticate />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  )
}

export default App;