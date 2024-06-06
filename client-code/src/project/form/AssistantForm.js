import Nav from '../Nav';
// import BasicForm from './BasicForm';
import BasicForm from "./BasicForm"

export default function AssistantForm() {

  return (
    <>
      {/* <Nav></Nav> */}
      <BasicForm></BasicForm>
      <Button variant="primary" type="submit">
        שלח טופס
      </Button>
    </>
  );
}