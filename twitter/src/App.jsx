import { Route, Routes, Navigate } from "react-router"
import { TweetProvider } from "./components/TweetProvider"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import NavbarComponent from "./components/Navbar"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import Register from "./components/Register"
import Login from "./components/Login"
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
        <Route path="/register" element={<Register />} />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/home" replace /> : <Login />}
                />
                <Route
                    path="/home"
                    element={user ? <HomePage /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        <Footer />
      </TweetProvider>
    </>
  )
}

export default App
