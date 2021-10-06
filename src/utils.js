// export const getMoviesBySearchTerm= (movieName)=>{
//     return fetch(`https://www.omdbapi.com/?apikey=b7320a4f&s=${movieName}`).then((res)=>res.json()).then((data)=>console.log(data))

   
//    }
  export const getMoviesBySearchTerm= async (movieName)=>{
      const res= await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieName}`)
      const data = await res.json()
      return data.Search;
  }
   
   
//  export const getMovieDetailsById=(id)=>{
//        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`).then((res)=>res.json()).then((data)=>console.log(data))
//    }
//    console.log(getMovieDetailsById("tt0133093"))
export const getMovieDetailsById= async (id)=>{
  const res= await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
  const data = await res.json()
  return data;
}