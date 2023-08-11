import React from "react"

export default function Card({img, rating, reviewCount, location, title, price}) {
    return (
        <div className="card">
          <img src={require(`../images/${img}`)} alt="katie zaferes pic" className="card--image"/>
          <br/>
          <div className="card--stats">
            <img src={require("../images/star.png")} alt="star pic" className="card--star"/>
            <span>{rating}</span>
            <span className="gray-font">{reviewCount} •</span>
            <span className="gray-font">{location}</span>
          </div>
          <p>{title}</p>
          <p><span className="bold-font">From ${price} </span>/ person</p>
        </div>
    )
}