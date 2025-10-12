import React from "react";
import LoginPage from "./components/LoginScreen";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* 크기 고정 */}
      <div className="w-[375px] h-[812px] bg-white shadow-md overflow-hidden border border-gray-200">
        <LoginPage />
      </div>
    </div>
  );
}
