import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function BasicForm() {
    const [helpCategory, setHelpCategory] = useState([]);
    const optionStyle = { 'font-size': '17px', 'color': 'black' }
    const selectStyle = { 'width': '207px', 'height': '38px', 'font-size': '20px', 'textAlign': 'center' }
    const formStyle = { 'width': '414px', 'height': '38px' }
    const formGroupStyle = { 'width': '200px', 'height': '38px', 'display': 'inline-block' }
    useEffect(() => {
        fetch('http://localhost:5089/api/categories')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setHelpCategory(data);
            });
    }, []);

    return (
        <Form /*style={formStyle}/*class="border border-primary"*/>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    {/* <Form.Label>ID</Form.Label> */}
                    <Form.Control type="ID" placeholder="Enter your ID" />
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
            <div>
                {helpCategory.map((helpc) => (console.log(helpc.type)))}
            </div>

            <Form.Group>

                <select style={selectStyle}>
                    {helpCategory.map((helpc) => (
                        <option value="someOption" style={optionStyle}>{helpc.type}</option>))}
                </select>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}
