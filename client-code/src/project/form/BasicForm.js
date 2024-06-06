import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// import '../style/form.css';

export default function BasicForm() {
    const [helpCategory, setHelpCategory] = useState([]);
    const optionStyle = { 'font-size': '17px', 'color': 'black' }
    const selectStyle = { 'width': '207px', 'height': '38px', 'font-size': '20px', 'textAlign': 'center' }
    const formStyle = { 'width': '450px'/*, 'height': '38px'*/}
    const formGroupStyle = { 'width': '200px', 'height': '38px','margin-buttom':'5rem' }
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
        <>
        <center>

  <Container>
    <Row className="justify-content-center">
      <Col md={8}>
        <div className="border p-4 rounded">
          <Form>
          <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicID">
                <Form.Control type="ID" placeholder="מספר זהות"required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicID">
                <Form.Control type="ID" placeholder="שם משפחה" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicFirstName">
                <Form.Control type="firstName" placeholder="שם פרטי" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Control type="lastName" placeholder="גיל" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicAge">
                <Form.Control type="age" placeholder="***" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Control type="lastName" placeholder="מספר פלאפון" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicAge">
                <Form.Control type="age" placeholder='כתובת דוא"ל'required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Control type="lastName" placeholder="רחוב" className="centered-placeholder" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicAge">
                <Form.Control type="age" placeholder="עיר" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Control type="lastName" placeholder="מספר דירה" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicAge">
                <Form.Control type="age" placeholder="מספר בנין" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Control type="lastName" placeholder="מיקוד" required/>
              </Form.Group>
            {/* </Row> */}

            {/* <Row className="mb-3"> */}
               <div>
                {helpCategory.map((helpc) => (console.log(helpc.type)))}
            </div>

            <Form.Group as={Col} controlId="formBasicLastName">
                <select style={selectStyle}>
                    {helpCategory.map((helpc) => (
                        <option value="someOption" style={optionStyle}>{helpc.type}</option>))}
                </select>
            </Form.Group>
            </Row>
 

            {/* <Button variant="primary" type="submit">
              שלח טופס
            </Button> */}
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
        </center>
        </>
    );
}
