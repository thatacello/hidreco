import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dicas from './pages/Dicas/index';
import NotFound from './pages/NotFound';
import Notificacoes from './pages/Notificacoes';
import Servicos from './pages/Servicos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ padding: '2rem 4rem' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dicas" element={<Dicas />} />
            <Route path="/alertas" element={<Notificacoes />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
