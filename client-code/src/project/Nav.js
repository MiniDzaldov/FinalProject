import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Nav() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    const buttonMargin = {"marginRight":"15px", "marginLeft":"15px"}
    return (
        <>
        {/* <button onClick={() => navigate("/assist_form")} >I need help</button>
        
        <button onClick={() => navigate("/assistant_form")} >I want to help</button> */}
        {/* <br></br> */}
        <div style={buttonStyle}>
            <Button variant="primary" style={buttonMargin} onClick={() => navigate("/assist_details")}> Assists Details</Button>
            <Button variant="primary" style={buttonMargin} onClick={() => navigate("/assistant_details")}> Assistants Details</Button>
            <br></br>
            <br></br>
        </div>
      
        </>
    )
}
