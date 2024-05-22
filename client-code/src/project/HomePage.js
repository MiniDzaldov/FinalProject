import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from "./Nav";

export default function HomePage() {
    const navigate = useNavigate();
  const s = {"backgroundColor":"green"}
  const a = {"color": "white","backgroundColor":"#FF9900" ,"borderColor":"#FF9900"}

    
    return (
        <>
        <Nav></Nav>
        <Button  style={a} onClick={() => navigate("/assist_form")} >I need help</Button>
        
        <Button variant="success"onClick={() => navigate("/assistant_form")} >I want to help</Button>
        <br></br>
        {/* <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
        
        <button onClick={() => navigate("/assistant_details")}>Show Assistant Details</button> */}

        </>
    )
}
