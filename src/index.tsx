import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import FlowersBouquet from './modules/components/FlowersBouquet/FlowersBouquet';
import { UiTemplate } from './common/elements/components/ui/UiTemplate';

const Index = () => {
  return (
    <UiTemplate>
      <h1>Florist's shop app</h1>
      <FlowersBouquet />
    </UiTemplate>

  )
}


const container = document.getElementById('app-root')!
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)