import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addUser } from './features/Test/testSlice';



const AddTest = () => {

    const dispatch = useDispatch()

const [form, setForm] = useState({
    Nom: "",
    email: "",
    image: "",
    id: ""
  })

  function envoyer(e){
    e.preventDefault();
    if(form && form.Nom && form.email && form.image){
      dispatch(addUser({...form, id: Date.now()}))
    }
    setForm({
      Nom: "",
      email: "",
      image: ""
    })
    console.log(form)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={form.Nom} onChange={(e)=>setForm({...form, Nom: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mail</Form.Label>
        <Form.Control type="email" placeholder="Enter mail" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" value={form.image} onChange={(e)=>setForm({...form, image: e.target.value})}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={envoyer}>
        Envoyer
      </Button>
    </Form>
  );

}



export default AddTest;