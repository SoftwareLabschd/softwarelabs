import ErrorBoundary from "@/components/ErrorBoundary";
import { LibraryInitializer } from "@/components/LibraryInitializer";
import PageTransition from "@/components/PageTransition";
// import SuspenseFallback from "@/components/SuspenseFallback";  // 👈 Commented out
import SkipToContent from "@/components/SkipToContent";

function App() {
  return (
    <ErrorBoundary>
      <SkipToContent />
      <LibraryInitializer />
      <PageTransition>
        {/* <SuspenseFallback> */}  {/* 👈 Commented out */}
          <div style={{ padding: '20px', color: 'white' }}>
            <h1>🧗 Test Page - Step 4 (Fixed)</h1>
            <p>SuspenseFallback skipped - loader was stuck!</p>
          </div>
        {/* </SuspenseFallback> */}  {/* 👈 Commented out */}
      </PageTransition>
    </ErrorBoundary>
  )
}

export default App