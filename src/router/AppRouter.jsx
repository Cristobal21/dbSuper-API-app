import { Navigate, Route, Routes } from "react-router-dom"
import { Angeles, Characters, Dioses, Home } from "../pages"
import { ErrorPage } from "../pages/ErrorPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="characters" element={ <Characters/> } />
            <Route path="angels" element={ <Angeles/> } />
            <Route path="gods" element={ <Dioses/> } />
            <Route path="error" element={ <ErrorPage/> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    </>
  )
}
