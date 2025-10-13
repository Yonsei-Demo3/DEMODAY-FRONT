import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[375px] h-[812px] bg-white shadow-md overflow-hidden border border-gray-200">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
