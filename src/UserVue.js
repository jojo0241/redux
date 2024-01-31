import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';




const UserVue = () => {

    const user = useSelector((state) => state.tests.user)

  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>Nom : {user.Nom}</Card.Title>
        <Card.Text>
          Mail : {user.email}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserVue;