import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useUser } from '../../contexts/userContext';

function RequestCard(props) {

    const {user , requests , setRequests} = useUser();

    const userData = JSON.parse(localStorage.getItem('userData'));
    const approve = (e)=>{
        console.log("pressed");
        const name  = props.request.name;
        const username = props.request.username;
        const url = `http://localhost:5000/admin/req/${userData?.username}/${username}/${name}`;
        console.log(url);

        axios.post(url)
        .then((result) => {
            const newRequests = requests.filter((req)=>{
              return req.name !== props.request.name;
            })
            setRequests(newRequests);
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.request.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by {props.request.username}</Card.Subtitle>
        <Card.Text>
          {props.request.request}
        </Card.Text>
        <Button onClick={(e)=>approve(e)} variant='primary'>Approve</Button>
        <Button variant='danger'>Disapprove</Button>
      </Card.Body>
    </Card>
  );
}

export default RequestCard;