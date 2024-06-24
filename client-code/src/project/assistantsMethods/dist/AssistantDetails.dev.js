// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import EmailIcon from './style/EmailIcon';
// import PhoneIcon from './style/PhoneIcon';
// import TrashIcon from './style/TrashIcon';
// import EditIcon from './style/EditIcon';
// const AssistantDetailsFetch = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();
//   const txt = { "textAlign": "center" }
//   const color = { "color": "black", "fontsize": "5px" }
//   const cardSize = { "width": "18rem", "height": "20rem", "marginRight": "1.5rem", "marginLeft": "1.5rem", "marginBottom": "5px", "borderColor": "gray", "marginTop": "3.5rem" }
//   useEffect(() => {
//     fetch('http://localhost:5089/api/Assistants')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setUsers(data);
//       });
//   }, []);
//   return (
//     <>
//       {/* <AssistDetailsButton></AssistDetailsButton> */}
//       <br></br>
//       <br></br>
//       {/* <br></br> */}
//       <Button variant="outline-primary" > <a  href="/assistant_form" > להוספת מתנדב +  </a></Button>
//       <div style={{ "display": "flex", "flex-wrap": "wrap" }}>
//         {users.map((user) => (
//           <Card border="success" style={cardSize}>
//             <Card.Body>
//               <Card.Text style={color}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 {/* <br></br> */}
//                 <h5>:אשמח מאד לעזור ב </h5> <h4 class="fw-bolder">{user.categoryCodeNavigation.type}</h4>
//                 <h5>:צרו איתי קשר ב</h5>
//                 <h5><i class="bi bi-telephone"> <PhoneIcon /></i> {user.phoneNumber}</h5>
//                 <h5>:או</h5>
//                 <h5> <i style={{ 'color': 'balck' }} class="bi bi-envelope"><EmailIcon /></i>  {user.email}</h5>
//               </Card.Text>
//             </Card.Body>
//           </Card>))}
//       </div>
//     </>
//   );
// };
// export default AssistantDetailsFetch;
"use strict";