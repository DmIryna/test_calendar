import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFalback from "./components/ErrorFalback.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFalback}
      onReset={() => document.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
