import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Disable right-click to prevent inspection
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  return false;
}, { capture: true });

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(<App />);
