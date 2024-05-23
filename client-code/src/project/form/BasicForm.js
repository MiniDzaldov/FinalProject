import { Form, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function BasicForm() {

    // const navigate = useNavigate();
    // const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    // const buttonMargin = {"marginRight":"15px", "marginLeft":"15px"}
    return (
        <>
            <div>
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

            </div>
      
        </>
    );
}
