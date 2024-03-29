import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"

const container = document.getElementById("app")
if (!container) {
  throw new Error("Root element #app must be in the document.")
}

const root = createRoot(container)
root.render(<App />)
