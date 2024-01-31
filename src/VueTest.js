import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { editUser } from './features/Test/testSlice';



const VueTest = ({user={}}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function modif(user) {

       
        dispatch(editUser(user))
        navigate(`/Test/${user?.id}`)
           

    }


  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>Nom : {user.Nom}</Card.Title>
        <Card.Text>
          Mail : {user.email}
        </Card.Text>
        <Button variant="primary" onClick={()=>modif(user)}>Modifier</Button>
      </Card.Body>
    </Card>
  );
}

export default VueTest;