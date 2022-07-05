import * as React from "react"
import "./Hero.css"

export default function Hero (){
    return(
        <div className="hero">
            <div className="content">
                <div className="intro" >
                    <h1>Welcome!</h1>
                    <h3>Your one stop shop!!</h3>
                    <p>
                    We were created by an organization named Codepath, and we sell all goodies ranging from food to electronic devices.
                    </p>
                </div>
                <div className="hero-img">
          <img src="./src/images/location.png" alt="location" height="100" />
        </div>
            </div>
        </div>
    )
}