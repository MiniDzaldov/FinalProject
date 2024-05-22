import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    const buttonMargin = {"marginright":"10px", "maginleft":"10px"}
    return (
        <>
        {/* <button onClick={() => navigate("/assist_form")} >I need help</button>
        
        <button onClick={() => navigate("/assistant_form")} >I want to help</button> */}
        {/* <br></br> */}
        <div style={buttonStyle}>
            <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
            <button  onClick={() => navigate("/assistant_details")}>Show Assistant Details</button>
            <br></br>
            <br></br>
        </div>
      
        </>
    )
}
