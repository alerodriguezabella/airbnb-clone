import React from "react"

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
  let badgeText 
  if (openSpots === 0){
    badgeText = 'SOLD OUT'
  } else if (location === 'Online'){
    badgeText = 'ONLINE'
  }
    return (
        <div className="card">
        {badgeText && (
          <div className="card--badge">{badgeText}</div>
        )}
          <img src={require(`../images/${img}`)} alt="katie zaferes pic" className="card--image"/>
          <br/>
          <div className="card--stats">
            <img src={require("../images/star.png")} alt="star pic" className="card--star"/>
            <span>{rating}</span>
            <span className="gray-font">{reviewCount} •</span>
            <span className="gray-font">{location}</span>
          </div>
          <p className="card--title">{title}</p>
          <p className="card--price"><span className="bold-font">From ${price} </span>/ person</p>
        </div>
    )
}