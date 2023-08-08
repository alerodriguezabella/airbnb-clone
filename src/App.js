import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

export default function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Card/>
        </div>
    )
}