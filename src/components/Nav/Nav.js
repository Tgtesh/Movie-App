import React from 'react'
import "./Nav.css"
const Nav = (props) => {
    return (
        <div className="navWrapper">
            <form className="formWrapper" type="submit"onSubmit={(e)=>{e.preventDefault(); props.getMovies()}}>
            <div className="inputWrapper">
            <input className="input"
            onChange={(e) => {
                props.setSearchText(e.target.value);
            }} type= "text" placeholder="Enter movie name for search"></input>
            </div>
            <div className="buttonWrapper">
            <button className="searchButton">Search</button>
            </div>
            </form>
        </div>
    )
}

export default Nav
