import { useNavigate } from "react-router-dom";
import NeedHelpButton from "./button/NeedHelpButton";
import WantToHelpButton from "./button/WantToHelpButton";
import SearchAssistById from "./button/SearchAssistById";



export default function Nav2() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    return (
        <>
        <div style={buttonStyle}>
            <NeedHelpButton></NeedHelpButton>
            <WantToHelpButton></WantToHelpButton>
            <SearchAssistById></SearchAssistById>
        <br></br>
        </div>
       
        </>
    )
}
