import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NeedHelpButton() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    return (
        <>
        <div style={buttonStyle}>
        <Button  variant="danger" onClick={() => navigate("/assist_form")} >I need help</Button>
        <br></br>
        </div>
        </>
    )
}
