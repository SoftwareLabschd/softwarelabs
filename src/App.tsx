import ErrorBoundary from "@/components/ErrorBoundary";
import { LibraryInitializer } from "@/components/LibraryInitializer";
import PageTransition from "@/components/PageTransition";
// import SuspenseFallback from "@/components/SuspenseFallback";
import SkipToContent from "@/components/SkipToContent";
import { Routes, Route } from 'react-router-dom'

// 👇 Import your page components
import Index from './pages/Index'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <SkipToContent />
      <LibraryInitializer />
      <PageTransition>
        {/* <SuspenseFallback> */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </SuspenseFallback> */}
      </PageTransition>
    </ErrorBoundary>
  )
}

export default App