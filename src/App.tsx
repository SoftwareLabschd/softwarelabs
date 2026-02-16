import ErrorBoundary from "@/components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div style={{ padding: '20px', color: 'white' }}>
        <h1>🧗 Test Page</h1>
        <p>If you see this, App.tsx is working!</p>
        <p>Testing ErrorBoundary...</p>
      </div>
    </ErrorBoundary>
  )
}

export default App