import React from "react"

export default function Card() {
    return (
        <div className="card">
          <img src={require("../images/katie-zaferes.png")} alt="katie zaferes pic" className="card--image"/>
          <br/>
          <div className="card--stats">
            <img src={require("../images/star.png")} alt="star pic" className="card--star"/>
            <span>5.0</span>
            <span className="gray-font">(6) •</span>
            <span className="gray-font">USA</span>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p><span className="bold-font">From $136 </span>/ person</p>
        </div>
    )
}