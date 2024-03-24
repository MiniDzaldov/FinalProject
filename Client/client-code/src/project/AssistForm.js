import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function AssistForm() {


  return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>ID</Form.Label> */}
        <Form.Control type="ID" placeholder="Enter your ID" />
        <br/>
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
        {/* <Form.Label>Last Name</Form.Label> */}
        <Form.Control type="numOfChildren" placeholder="Enter your numOfChildren" />
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
    
    <h3> check how to do the address and category......</h3>


      {/* <InputGroup className="mb-3">
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
      
    
      {/* <button variant="primary" type="submit">
        Submit
      </button> */}

      {/* run a post function */}
      <Button type="submit">Submit form</Button> 
   
      </Form>
    </>
  );
}