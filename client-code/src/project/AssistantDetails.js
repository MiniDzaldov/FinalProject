import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AssistDetailsButton from './button/AssistDetailsButton';

const AssistantDetailsFetch = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const txt = {"textAlign": "center"}
  const color={"color": "black", "fontsize":"5px"}
  const cardSize ={"width": "18rem", "height": "18rem","marginRight": "0.5rem", "marginLeft": "0.5rem", "marginBottom":"5px" ,"borderColor" : "gray", "marginTop":"1.5rem"}

  useEffect(() => {
    fetch('http://localhost:5089/api/Assistants')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <>
    {/* <AssistDetailsButton></AssistDetailsButton> */}
        
<div style={{ "display": "flex", "flex-wrap": "wrap" }}>
{users.map((user) =>(
<Card border="success" style={cardSize}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text style={color}>
          <h4>{user.firstName + " " + user.lastName}</h4> 
          {/* <br></br> */}
         <h5>I would be happy to help with: </h5> <h4>{user.categoryCodeNavigation.type}</h4>
          <h5>Please contact me at:</h5>
          <h5>{user.phoneNumber}</h5>
          <h5>or:</h5>
          <h5> {user.email}</h5>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere {user.firstName}</Button> */}
      </Card.Body>
    </Card>))}
    </div>


   </>
  );
};
export default AssistantDetailsFetch;
