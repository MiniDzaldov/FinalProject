import { Button, Form, Container } from 'react-bootstrap';
import Nav from '../Nav';
// import BasicForm from './BasicForm';
import BasicForm from "./BasicForm"
import { useNavigate } from 'react-router-dom';

export default function AssistantForm() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Nav></Nav> */}
      <Container>
      <BasicForm></BasicForm>
      <br></br>
      <Button variant="outline-primary" type="submit"  onClick={() => navigate("/add_assistant_successfully")}>
        שלח טופס
      </Button>
      </Container>
    </>
  );
}