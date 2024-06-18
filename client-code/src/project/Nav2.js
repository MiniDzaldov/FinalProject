import { useNavigate } from "react-router-dom";
// import NeedHelpButton from "./button/NeedHelpButton";
// import WantToHelpButton from "./button/WantToHelpButton";
// import SearchAssistById from "./button/SearchAssistById";
// import l from '../pictures/logo1.png'


export default function Nav2() {
    const navigate = useNavigate();
    const buttonStyle = {"marginTop":"0px", "display": "fixed"}
    // const logoStyle = {'width': '8rem', 'height':'8rem'}
    return (
        <>
        {/* <div ><img style={logoStyle} src ={l}></img></div> */}
        <div style={buttonStyle}>
            {/* <NeedHelpButton></NeedHelpButton>
            <WantToHelpButton></WantToHelpButton>
            <SearchAssistById></SearchAssistById> */}
        <br></br>
        </div>
       
        </>
    )
}
