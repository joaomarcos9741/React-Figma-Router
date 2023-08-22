import { Routes, Route } from "react-router-dom"
import { PageHomes, PageBiblioteca, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHomes />} />
        <Route path="biblioteca" element={<PageBiblioteca />} />
      </Route>
    </Routes>
  )
}