import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from './data.js'

export default function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {data.map(item => {
                    return(
                        <Card 
                            key={item.id}
                            img={item.coverImg}
                            rating={item.stats.rating}
                            reviewCount={item.stats.reviewCount}
                            location={item.location}
                            title={item.title}
                            price={item.price}
                        />
                    )
                }) }
            </section>
        </div>
    )
}