import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes"
import { IssuesProvider } from "./contexts/IssuesContext"

export function App() {
  return (
    <IssuesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </IssuesProvider>
  )
}
