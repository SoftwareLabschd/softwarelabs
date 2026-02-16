import ErrorBoundary from "@/components/ErrorBoundary";
import { LibraryInitializer } from "@/components/LibraryInitializer";
import PageTransition from "@/components/PageTransition";
import SuspenseFallback from "@/components/SuspenseFallback";

function App() {
  return (
    <ErrorBoundary>
      <LibraryInitializer />
      <PageTransition>
        <SuspenseFallback>
          <div style={{ padding: '20px', color: 'white' }}>
            <h1>🧗 Test Page - Step 4</h1>
            <p>Testing SuspenseFallback...</p>
          </div>
        </SuspenseFallback>
      </PageTransition>
    </ErrorBoundary>
  )
}

export default App