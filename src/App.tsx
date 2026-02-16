import ErrorBoundary from "@/components/ErrorBoundary";
import { LibraryInitializer } from "@/components/LibraryInitializer";
import PageTransition from "@/components/PageTransition";

function App() {
  return (
    <ErrorBoundary>
      <LibraryInitializer />
      <PageTransition>
        <div style={{ padding: '20px', color: 'white' }}>
          <h1>🧗 Test Page - Step 3</h1>
          <p>Testing PageTransition...</p>
        </div>
      </PageTransition>
    </ErrorBoundary>
  )
}

export default App