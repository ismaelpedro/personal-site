import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

// eslint-disable-next-line no-console
console.log(
  '%cNothing to see here 😄',
  'font-size: 20px; color: #34d399; line-height: 1.6;',
)

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
