import { Routes, Route } from 'react-router-dom'

// Comment out all other imports temporarily
// import { LibraryInitializer } from "@/components/LibraryInitializer";
// import PageTransition from "@/components/PageTransition";
// import ErrorBoundary from "@/components/ErrorBoundary";
// import SuspenseFallback from "@/components/SuspenseFallback";
// import SkipToContent from "@/components/SkipToContent";

// Import just one simple component to test
// import Home from './pages/Home' // or wherever your Home page is

function App() {
  console.log('🎨 App component rendering...')
  
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>🧗 Test Page</h1>
      <p>If you see this, App.tsx is working!</p>
      <p>Check console for logs...</p>
    </div>
  )
}

export default App