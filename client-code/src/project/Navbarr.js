

import { useNavigate } from "react-router-dom";
import l from '../pictures/logo1.png'



export default function Navbarr() {
    // const navigate = useNavigate();
    const buttonStyle = { "marginTop": "0px", "display": "fixed" }
    const color = { 'color': 'white' }
    const divStyle = {'marginTop':'2rem', 'marginLeft':'2rem'}
    const logoStyle = {'width': '8rem', 'height':'8rem'}
    const navStyle ={'margin-right':'2.5rem', 'margin-left':'2.5rem'}
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg white">
                    <div style={divStyle} ><img style={logoStyle} src ={l}></img></div>

                    <div style={navStyle}>
                        <a  class="navbar-brand" href="/assist_form" >אני מעוניין בעזרה</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                        </button>
                    </div>

                    <div style={navStyle}>
                        <a  class="navbar-brand" href="/assistant_form" >אני מעוניין לעזור</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                        </button>
                    </div>
                    
                    <div style={navStyle}>
                        <a  class="navbar-brand" href="/assistant_details" >פרטי מתנדבים</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                        </button>
                    </div>

                    <div style={navStyle} >
                        <a class="navbar-brand" href="/assist_details" >פרטי נזקקים</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                       <div style={navStyle}>
                        <a class="navbar-brand" href="/about" >אודות</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>



                </nav>
            </div>
        </>
    )
}




