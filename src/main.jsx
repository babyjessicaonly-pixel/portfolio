import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './routes/App.jsx'
import CasaArtisti from './routes/CasaArtisti.jsx'
import PersonaggiAllucinati from './routes/PersonaggiAllucinati.jsx';
import Mokeups from './routes/Mokeups/SezioniMokeups.jsx';

import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/la-casa-degli-artisti" element={<CasaArtisti />} />
        <Route path="/personaggi-allucinati" element={<PersonaggiAllucinati />} />
        <Route path="/mokeups" element={<Mokeups />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
