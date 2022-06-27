import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo (){
    return(
        <div className ="logo">
            <Link to="/">
        <img src="./src/images/store.png" alt="store logo"
        height="50" width="50" />  </Link>
        </div>
    )
}