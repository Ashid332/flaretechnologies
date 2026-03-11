import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "@/styles/globals.css"

createRoot(document.getElementById("react-hero-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
