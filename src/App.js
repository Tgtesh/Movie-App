import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/movieCard/MovieCard';
import MovieDetails from './components/movieDetails/MovieDetails';
import Nav from './components/Nav/Nav';
import { getMovieDetailsById, getMoviesBySearchTerm } from './utils'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText]=useState("")
  const [Details, setDetails]= useState({});
  const [show, setShow]=useState(false)

  const getMovies =async()=>{
    const data = await getMoviesBySearchTerm(searchText);
    setMovies(data);
  }
  
  const getDetails = async(id)=>{
    const data= await getMovieDetailsById(id)
    setDetails(data);
    setShow(true);
  }
  console.log(Details)
// useEffect(() => {
//   getMovies()
//   getDetails()
// }, [])
  // console.log(movies);

  
  return (
    <div className="App">
      <Nav setSearchText={setSearchText} searchText={searchText} getMovies={getMovies}/>
{/* <MovieCard poster={movies.Poster} title={movies.Title} type={movies.Type}/> */}
<MovieDetails Details={Details} getDetails={getDetails} show={show} setShow={setShow}/>
<MovieCard movies={movies} getDetails={getDetails}/>

    </div>
  );
}

export default App;
