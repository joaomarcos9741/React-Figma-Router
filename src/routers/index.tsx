import { Routes, Route } from 'react-router-dom'
import { PageAdm, PageCadastrar, PageHomes, PageLayout, PageBiblioteca, PageLogin } from '../pages'
import ProtectedRoute from './ProtectedRoute'

export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHomes />} />
        <Route path="/biblioteca" element={<PageBiblioteca />} />
        <Route path="/cadastrar" element={<PageCadastrar />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="" element={<PageAdm />} />
        </Route>
      </Route>

    </Routes>
  )
}