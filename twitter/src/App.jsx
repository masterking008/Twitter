import { Route, Routes, Navigate } from "react-router"
import { TweetProvider } from "./components/TweetProvider"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import NavbarComponent from "./components/Navbar"
import { useState, useEffect, useContext } from "react"
import axios from "axios"

import ProtectedRoute from "./components/ProtectedRoute"
import HomePage from "./components/Homepage"
import { AuthContext } from "./context/AuthContext"
import './App.css'



function App() {

  const { user } = useContext(AuthContext);


  return (

    <>

      <TweetProvider>
        <NavbarComponent />
        <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </TweetProvider>
    </>
  )
}

export default App
