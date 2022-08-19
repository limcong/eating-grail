import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Dp } from './dp/Dp';
import { createRoot } from './utils/createRoot';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/__sm-games__/dp" element={<Dp />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(<App />, 'root');
