import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './pages/contact.jsx';
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
import Detail from './pages/detail.jsx';
import Weather from './pages/weather.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/products/:id' element={<Detail />} />
      <Route path='/weather/:cityName' element={<Weather />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />

      <Route path='/dashboard' element={<AdminLayout><Dashboard /></AdminLayout>} />
    </Routes>
  </BrowserRouter>
)
