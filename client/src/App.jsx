import React from 'react'
import LandingRoutes from './components/LandingPage/LandingRoutes'
import { AuthProvider } from "./components/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
       <LandingRoutes/>
    </AuthProvider>
  )
}