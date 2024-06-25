import { useState } from "react";
import AddFilm from "./componed/add";
import Filtercard from "./componed/filter";
import List from "./componed/movieslist";


const App =()=>{

  const [film , setfilm] = useState([
    {title: "l'illusionista" ,
     description : "film avventura , vincitore di un premio oscar" ,
     posterURL : "https://www.stardust.it/uploads/img/movie/poster/4429ffd68da726b80fa3ecf57e5266c51555279778.jpeg" ,
     rating: 2
    },
    {title: "l'illusionista" ,
      description : "film avventura , vincitore di un premio oscar" ,
      posterURL : "https://www.stardust.it/uploads/img/movie/poster/4429ffd68da726b80fa3ecf57e5266c51555279778.jpeg" ,
      rating: 2
     }
  ])

  const [filmCerca, setFilmCerca] = useState(film);
  
 
  const   addNewMovie=(movie)=>{
    setFilmCerca([...filmCerca , movie])
    } ;

    const ricerca = (value)=>{
      setFilmCerca(filmCerca.filter((item)=>{
        return item.title.toLowerCase() === value.toLowerCase() || item.rating === Number(value)
      }))
    }
       ;
    


  return(
    <div>
      <div>
      <Filtercard ricerca={ricerca}/>
      </div>
      <div style={{backgroundColor:"blue" , padding:"20px"}}>
        <List film={filmCerca} />
      </div>
      <div>
        <AddFilm addNewMovie={addNewMovie}/>
      </div>
      

    </div>
  )
}


export default App;
