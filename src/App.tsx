import ErrorBoundary from "@/components/ErrorBoundary";
import { LibraryInitializer } from "@/components/LibraryInitializer";

function App() {
  return (
    <ErrorBoundary>
      <LibraryInitializer />
      <div style={{ padding: '20px', color: 'white' }}>
        <h1>🧗 Test Page - Step 2</h1>
        <p>Testing LibraryInitializer...</p>
      </div>
    </ErrorBoundary>
  )
}

export default App