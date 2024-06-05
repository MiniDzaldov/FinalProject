import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function AssistantDetailsButton() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    const buttonMargin = {"marginRight":"15px", "marginLeft":"15px"}
    return (
        <>
        <div style={buttonStyle}>
            <Button variant="primary" style={buttonMargin} onClick={() => navigate("/assistant_details")}> פרטי מתנדבים</Button>
            <br></br>
        </div>
        </>
    )
}
