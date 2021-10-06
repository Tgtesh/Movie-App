import React from 'react';

import "./MovieCard.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function MovieCard(props) {

    return (
        <div>
            {/* <div className="leftArrow">
            <ArrowBackIosNewIcon/>
            </div> */}
        <div  className="moviesWrapper"> {props.movies.map((movie,index)=>(
            <div onClick={()=>props.getDetails(movie.imdbID)}  className="movieWrapper" key={movie.imdbID}>
            <img className="image" src={movie.Poster} alt="broken image"></img>
           {/* {props.setId(movie.imdbID)} */}
            
            <h3>{movie.Title}</h3>
            
            <h2>{movie.Type}</h2>
            <button className="button" onClick={()=>props.getDetails(movie.imdbID)}>Click Me</button>
            </div>
            ))}
 </div>
 {/* <div className="rightArrow">
 <ArrowForwardIosIcon/>
 </div> */}
 </div>);
 }
export default MovieCard
