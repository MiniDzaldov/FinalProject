import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <>
        <button >I am interested in helping</button>
        <br></br>
        <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
        
        <button onClick={() => navigate("/assistant_details")}>Show Assistant Details</button>

        </>
    )
}
