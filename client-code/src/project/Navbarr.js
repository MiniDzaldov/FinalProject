

import { useNavigate } from "react-router-dom";
import l from '../pictures/logo1.png'

export default function Navbarr() {
    const buttonStyle = { "marginTop": "0px", "display": "fixed" }
    const color = { 'color': 'white' }
    const divStyle = {'marginTop':'2rem', 'marginLeft':'2rem'}
    const logoStyle = {'width': '8rem', 'height':'8rem'}
    const navStyle ={'marginRight':'4rem', 'marginLeft':'4rem'}
    return (
        <>
            <div>
        
                <nav class="navbar fixed-top navbar-expand-lg white " style={{"width": "100vw", "backgroundColor":"white"}} /*style={navbarStyle}*/>
                    <div style={divStyle} ><img style={logoStyle} src ={l}></img></div>
                    <div style={navStyle}>
                        <a  class="navbar-brand" href="/assist_form" >אני מעוניין בעזרה</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                    </div>

                    <div style={navStyle}>
                        <a  class="navbar-brand" href="/assistant_form" >אני מעוניין לעזור</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> </button>
                    </div>
                    
                    <div style={navStyle}>
                        <a  class="navbar-brand" href="/assistant_details" >פרטי מתנדבים</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">                        </button>
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
            <br></br>
      <br></br>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      {/* <br></br>
      <br></br> */}
      
        </>
    )
}


// import { useNavigate } from "react-router-dom";
// import l from '../pictures/logo1.png'

// export default function Navbarr() {
//     const buttonStyle = { "marginTop": "0px", "display": "fixed" }
//     const color = { 'color': 'white' }
//     const divStyle = { 'marginTop': '2rem', 'marginLeft': '2rem' }
//     const logoStyle = { 'width': '8rem', 'height': '8rem' }
//     const navStyle = { 'marginRight': '4rem', 'marginLeft': '4rem' }

//     return (
//         <>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"  style={{backgroundColor: '#ffffff'}}>
//                     <div style={divStyle}>
//                         <img style={logoStyle} src={l} alt="Logo" />
//                     </div>
//                     <div style={navStyle}>
//                         <a className="navbar-brand" href="/assist_form">אני מעוניין בעזרה</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             {/* <span className="navbar-toggler-icon"></span> */}
//                         </button>
//                     </div>
//                     <div style={navStyle}>
//                         <a className="navbar-brand" href="/assistant_form">אני מעוניין לעזור</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             {/* <span className="navbar-toggler-icon"></span> */}
//                         </button>
//                     </div>
//                     <div style={navStyle}>
//                         <a className="navbar-brand" href="/assistant_details">פרטי מתנדבים</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             {/* <span className="navbar-toggler-icon"></span> */}
//                         </button>
//                     </div>
//                     <div style={navStyle}>
//                         <a className="navbar-brand" href="/assist_details">פרטי נזקקים</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                     </div>
//                     <div style={navStyle}>
//                         <a className="navbar-brand" href="/about">אודות</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }


// import { useNavigate } from "react-router-dom";
// import l from '../pictures/logo1.png'

// export default function Navbarr() {
//     return (
//         <>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#ffffff' }}>
//                     <div className="container">
//                         <a className="navbar-brand" href="/">
//                             <img src={l} width="50" height="50" alt="Logo" />
//                         </a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/assist_form">אני מעוניין בעזרה</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/assistant_form">אני מעוניין לעזור</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/assistant_details">פרטי מתנדבים</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/assist_details">פרטי נזקקים</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/about">אודות</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }



