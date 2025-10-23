import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './routes/App.jsx'
import CasaArtisti from './routes/CasaArtisti.jsx'


import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/la-casa-degli-artisti" element={<CasaArtisti />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
