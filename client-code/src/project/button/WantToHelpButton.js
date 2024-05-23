import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WantToHelpButton() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    return (
        <>
        <div style={buttonStyle}>       
        <Button variant="success" onClick={() => navigate("/assistant_form")} >I want to help</Button> 
        <br></br>
        </div>
      
        </>
    )
}