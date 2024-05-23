// create assistant form 

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import  BasicForm   from './form/BasicForm';
// import BasicForm from './form/BasicForm';
// import Nav2 from './Nav2';

export default function AssistantForm() {
  const [helpCategory, setHelpCategory] = useState([]);
   useEffect(() => {
    fetch('https://localhost:7189/api/categories')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setHelpCategory(data);
      });
  }, []);

  return (
    <>
    <Nav></Nav>
    
    {/* <BasicForm></BasicForm> */}


    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>ID</Form.Label> */}
        <Form.Control type="ID" placeholder="Enter your ID" />
        
        {/* <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text> */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>First Name</Form.Label> */}
        <Form.Control type="firstName" placeholder="Enter your firstName" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Last Name</Form.Label> */}
        <Form.Control type="lastName" placeholder="Enter your lastName" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Age</Form.Label> */}
        <Form.Control type="age" placeholder="Enter your age" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>phoneNumber</Form.Label> */}
        <Form.Control type="phoneNumber" placeholder="Enter your phoneNumber" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label> Email</Form.Label> */}
        <Form.Control type="email" placeholder="Enter your email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label> Email</Form.Label> */}
        <Form.Control type="city" placeholder="Enter your city" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label> Email</Form.Label> */}
        <Form.Control type="street" placeholder="Enter your street" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label> Email</Form.Label> */}
        <Form.Control type="numOfBuilding" placeholder="Enter your numOfBuilding" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label> Email</Form.Label> */}
        <Form.Control type="apartmentNumber" placeholder="Enter your apartmentNumber" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label> Email</Form.Label> */}
        <Form.Control type="zipCode" placeholder="Enter your zipCode" />
    </Form.Group>
    

    {/* <Form.Group>
      <div>
       {helpCategory.map((h)) => (
    <select>
      <option value="someOption">{h.type}</option>
 
    </select>
    ))}
   </div>
    </Form.Group> */}




      {
      
      /* <InputGroup className="mb-3">
{users.map((user) =>(

        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup> */}
      
    
      {/* run a post function */}
      <Button type="submit">Submit form</Button> 
    </>
  );
}