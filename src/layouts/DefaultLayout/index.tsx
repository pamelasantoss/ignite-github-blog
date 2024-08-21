import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export function DefaultLayout() {
  return (
    <main>
      <Header />
      <div className="max-w-4xl m-auto box-border px-4">
        <Outlet />
      </div>
    </main>
  )
}
