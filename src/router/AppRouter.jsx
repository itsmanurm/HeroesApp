import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { DcPage, MarvelPage } from "../heroes"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { NavBar } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>


        <Routes>

            <Route path="login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            } />
            
        </Routes>
    </>
  )
}
