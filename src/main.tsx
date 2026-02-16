import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// ============================================
// 🔍 DEBUGGING LOGS (Remove after fixing)
// ============================================
console.log('🚀 ========================================')
console.log('🚀 App Starting...')
console.log('🚀 ========================================')
console.log('📍 Current URL:', window.location.href)
console.log('📍 Base Path:', window.location.pathname)
console.log('📍 Environment:', import.meta.env.MODE)
console.log('📍 Production Mode:', import.meta.env.PROD)
console.log('========================================')

// Check Supabase environment variables
console.log('🔐 Supabase Configuration:')
console.log('   - VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Not Set')
console.log('   - VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Not Set')
console.log('========================================')

// ============================================
// 🎨 RENDER APP
// ============================================
try {
  const rootElement = document.getElementById("root")
  
  if (!rootElement) {
    throw new Error('Root element #root not found in HTML!')
  }

  const root = createRoot(rootElement)
  
  console.log('✅ Root element found')
  console.log('🎨 Rendering App with HashRouter...')

  root.render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  )

  console.log('✅ App rendered successfully!')
  console.log('🚀 ========================================')
  
} catch (error) {
  console.error('❌ ========================================')
  console.error('❌ CRITICAL ERROR - App failed to render!')
  console.error('❌ ========================================')
  console.error('Error:', error)
  console.error('Stack:', error instanceof Error ? error.stack : 'No stack trace')
  console.error('❌ ========================================')
  
  // Show error on screen
  const errorDiv = document.createElement('div')
  errorDiv.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a2e;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    padding: 20px;
    z-index: 9999;
  `
  errorDiv.innerHTML = `
    <h1 style="color: #ff6b6b;">😵 App Failed to Load</h1>
    <p style="color: #888;">Check browser console for details</p>
    <p style="color: #fff; background: #333; padding: 10px; border-radius: 5px; margin-top: 20px;">
      Error: ${error instanceof Error ? error.message : String(error)}
    </p>
    <button 
      onclick="window.location.reload()" 
      style="margin-top: 20px; padding: 10px 20px; background: #00dc82; border: none; border-radius: 5px; cursor: pointer; color: black;"
    >
      🔄 Reload Page
    </button>
  `
  document.body.appendChild(errorDiv)
}

// ============================================
// 📡 SERVICE WORKER (Commented out for now)
// ============================================
/*
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/softwarelabs/sw.js')
      .then((registration) => {
        console.log('✅ SW registered:', registration)
      })
      .catch((error) => {
        console.error('❌ SW registration failed:', error)
      })
  })
} else if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((reg) => reg.unregister())
  })
  if ('caches' in window) {
    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)))
  }
}
*/