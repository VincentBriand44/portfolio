import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { ScrollContextProvider } from './contexts/ScrollContext'

import './assets/css/index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ScrollContextProvider>
      <App />
    </ScrollContextProvider>
  </StrictMode>
)
