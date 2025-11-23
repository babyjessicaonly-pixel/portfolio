import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import './index.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home.jsx'
import CasaArtisti from './routes/CasaArtisti.jsx'
import PersonaggiAllucinati from './routes/PersonaggiAllucinati.jsx';
import Mokeups from './components/Mokeups/SezioniMokeups.jsx';
import Animation from './routes/Animation.jsx';
import AppLayout from './components/Layout/AppLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"                      element={<AppLayout> <Home />                 </AppLayout>} />
        <Route path="/la-casa-degli-artisti" element={<AppLayout> <CasaArtisti />          </AppLayout>} />
        <Route path="/personaggi-allucinati" element={<AppLayout> <PersonaggiAllucinati /> </AppLayout>} />
        <Route path="/mokeups"               element={<AppLayout> <Mokeups />              </AppLayout>} />
        <Route path="/animation"             element={<AppLayout> <Animation />            </AppLayout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
