import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import './index.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './routes/App.jsx'
import CasaArtisti from './routes/CasaArtisti.jsx'
import PersonaggiAllucinati from './routes/PersonaggiAllucinati.jsx';
import Mokeups from './components/Mokeups/SezioniMokeups.jsx';
import Animation from './routes/Animation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/la-casa-degli-artisti" element={<CasaArtisti />} />
        <Route path="/personaggi-allucinati" element={<PersonaggiAllucinati />} />
        <Route path="/mokeups" element={<Mokeups />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
