import { Navigate, Route, Routes } from "react-router-dom"
import { Characters, Heroes, Home, Villians } from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="characters" element={ <Characters/> } />
            <Route path="heroes" element={ <Heroes/> } />
            <Route path="villians" element={ <Villians/> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    </>
  )
}
