


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddFilm({addNewMovie}) {
    // const [title, setTitle]= useState("") ;
    // const [description, setDescription]= useState("") ;
    // const [posterURL, setPosterURL]= useState("") ;
    // const [rating, setRating]= useState(0) 

    const [filmAdd, setFilmAdd] = useState({
        title:'',
        description:'',
        posterURL:'',
        rating:0
    });

    const change=(e)=>{
        setFilmAdd({...filmAdd,[e.target.name]:e.target.value})
      }

    

    const handelSubmit =()=>{
      
     addNewMovie(filmAdd);
     setFilmAdd({
        title:'',
        description:'',
        posterURL:'',
        rating:0
     })
    }

    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={change} name='title'  value={filmAdd.title}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" onChange={change} name='description'  value={filmAdd.description}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>posterURL</Form.Label>
        <Form.Control type="text" placeholder="Enter posterURL" onChange={change} name='posterURL'  value={filmAdd.posterURL}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>rating</Form.Label>
        <Form.Control type="number" placeholder="rating" onChange={change} name='rating'  value={filmAdd.rating} />
      </Form.Group>
      
      <Button variant="primary"  onClick={()=>handelSubmit()}   >
        ADD
      </Button>
    </Form>
  );
}
//onClick={()=>newAdd( title:title , description:description , description:description , posterURL:posterURL , rating:rating )}

export default AddFilm;