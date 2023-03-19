import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import FlowersBouquet from './components/FlowersBouquet/FlowersBouquet';

const Index = () => {
  return (
    <div>
      <h1>Florist's shop app</h1>
      <FlowersBouquet />
    </div>
    
  )
}


const container = document.getElementById('app-root')!
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)