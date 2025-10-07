
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KaKaoLoginPage from './pages/KaKaoLoginPage';
import MainPage from './pages/MainPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<KaKaoLoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
