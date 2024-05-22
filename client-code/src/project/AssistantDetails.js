import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AssistantDetailsFetch = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const txt = {"textAlign": "center"}
  const color={"color": "black", "fontsize":"5px"}
  const cardSize ={"width": "22rem", "height": "20rem","marginRight": "0.5rem", "marginLeft": "0.5rem", "marginBottom":"5px" ,"borderColor" : "gray", "marginTop":"1.5rem"}



  useEffect(() => {
    fetch('https://localhost:7189/api/Assistants')
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
    <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
    <br></br>
    
   {/*fix the data to table show....  */}
   {/* { users.map(user => (<div>name: {user.firstName},  email: {user.email}, phoneNumber: {user.phoneNumber}, category: {user.categoryCode}, address: {user.addressCode}</div>))}  */}

   {/* <center>
    <table class="table table-striped" style={{"width": "90rem", "alignContent":"center"}}>
        <tr>
            <th style={txt}>Name</th>
            <th style={txt}>Email</th>
            <th style={txt}>PhoneNumber</th>
            <th style={txt}>Category</th>
        </tr>
        {users.map((user) =>(
        <tr>
            <td style={txt}>{user.firstName + " " + user.lastName}</td>
            <td style={txt}>{user.email}</td>
            <td style={txt}>{user.phoneNumber}</td>
            <td style={txt}>{user.categoryCodeNavigation}</td>
        </tr>
       ))}
    </table>
</center> */}
<div style={{ "display": "flex", "flex-wrap": "wrap" }}>
{users.map((user) =>(
<Card border="success" style={cardSize}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text style={color}>
          <h4>{user.firstName + " " + user.lastName}</h4> 
          <br></br>
         <h5>I would be happy to help with: </h5> <h4>{user.categoryCodeNavigation}</h4>
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
