import { useNavigate } from "react-router-dom";

export default function Nav2() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    return (
        <>
        <div style={buttonStyle}>
        <button onClick={() => navigate("/assist_form")} >I need help</button>
        
        <button onClick={() => navigate("/assistant_form")} >I want to help</button> 
        <br></br>
        <br></br>
        
        </div>
        {/* <div style={buttonStyle}>
            <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
            <button onClick={() => navigate("/assistant_details")}>Show Assistant Details</button>
            <br></br>
            <br></br> 
        </div>
       */}
        </>
    )
}
