import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <>
        <Nav></Nav>
        <button  onClick={() => navigate("/assist_form")} >I need help</button>
        
        <button onClick={() => navigate("/assistant_form")} >I want to help</button>
        <br></br>
        {/* <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
        
        <button onClick={() => navigate("/assistant_details")}>Show Assistant Details</button> */}

        </>
    )
}
