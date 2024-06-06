import { Button } from 'react-bootstrap';
import Nav from '../Nav';
import BasicForm from './BasicForm';

export default function AssistForm() {

  return (
    <>
      {/* <Nav></Nav> */}
      <BasicForm></BasicForm>
      <Button variant="primary" type="submit" >
        שלח טופס
      </Button>
    </>
  );
}