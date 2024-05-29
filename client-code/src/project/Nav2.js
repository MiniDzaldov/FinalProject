import { useNavigate } from "react-router-dom";
import NeedHelpButton from "./button/NeedHelpButton";
import WantToHelpButton from "./button/WantToHelpButton";



export default function Nav2() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    return (
        <>
        <div style={buttonStyle}>
            <NeedHelpButton></NeedHelpButton>
            <WantToHelpButton></WantToHelpButton>
        <br></br>
        </div>
       
        </>
    )
}
