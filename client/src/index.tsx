import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dp } from './dp/Dp';
import { createRoot } from './utils/createRoot';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
