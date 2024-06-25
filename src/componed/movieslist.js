// import REACT , {useEffect, useState} from "react"


import Cards from "./moviescards";
// import AddFilm from "./add";




const List =({film})=>{
   

   


   
    return(
      <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap"}}>
        {film.map((element,index)=>{
          return <Cards movie={element} key={index}/>
        })}
        
      </div>
    )
  }
  
  
  export default List;
  