import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

// Global handler to surface unhandled promise rejections during development.
// This will log the error and stack so we can trace "Uncaught (in promise) Object".
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.addEventListener('unhandledrejection', (event) => {
    try {
      console.group('%c[Unhandled Promise Rejection]', 'color: #d97706; font-weight: bold')
      console.error('Reason:', event.reason)
      if (event.reason && event.reason.stack) console.error(event.reason.stack)
      else if (typeof event.reason === 'object') console.error('Detail:', JSON.stringify(event.reason, null, 2))
      console.groupEnd()
    } catch (e) {
      console.error('[UnhandledRejection handler] failed to log', e)
    }
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
)
