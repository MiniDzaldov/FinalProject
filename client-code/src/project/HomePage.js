import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Nav2 from "./Nav2";

export default function HomePage() {
    const navigate = useNavigate();
  const s = {"backgroundColor":"green"}
  const a = {"color": "white","backgroundColor":"#FF9900" ,"borderColor":"#FF9900"}

    
    return (
        <>
        <Nav></Nav>
        <Nav2></Nav2>
        
        </>
    )
}