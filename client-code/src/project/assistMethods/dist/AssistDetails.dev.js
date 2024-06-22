// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById'
// import { cardTextColor, cardSize, trashSize } from '../style/Styles'
// import EmailIcon from '../style/EmailIcon'
// import PhoneIcon from '../style/PhoneIcon'
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [searchResult, setSearchResult] = useState(null);
//    // סטייט לתוצאות החיפוש
//   const [showDetails, setShowDetails] = useState(false);
//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       setAssists(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   return (
//     <>
//       <br></br>
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById setSearchResult={setSearchResult} />
//       </div>
//       <div style={{ "display": "flex", "flex-wrap": "wrap" }}>
//         {assists.map((user) => (
//           <Card border="danger" style={cardSize}>
//             <div>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i class="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i class="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5> <h4 class="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//                 {/* <h5> :צרו איתי קשר ב</h5>
//                 <h5> <i class="bi bi-telephone"> <PhoneIcon /></i>   {user.phoneNumber}</h5>
//                 <h5>:או</h5>
//                 <h5> <i style={{ 'color': 'balck' }} class="bi bi-envelope"> <EmailIcon /></i>   {user.email}</h5> */}
//                 {/* <h6>{user.addressCodeNavigation.city}</h6> */}
//               </Card.Text>
//               {showDetails && (
//                 <Card.Text>
//                   <h5> :צרו איתי קשר ב</h5>
//                   <h5> <i class="bi bi-telephone"> <PhoneIcon /></i>   {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5> <i style={{ 'color': 'balck' }} class="bi bi-envelope"> <EmailIcon /></i>   {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={toggleDetails}>
//                 {showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//               {/* <Button variant="primary">Go somewhere {user.firstName}</Button> */}
//             </Card.Body>
//           </Card>))}
//       </div>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardSize, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [searchResult, setSearchResult] = useState(null);
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       setAssists(response.data);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setAssists(prevAssists => {
//       return prevAssists.map(assist => {
//         if (assist.id === id) {
//           return { ...assist, showDetails: !assist.showDetails };
//         } else {
//           return assist;
//         }
//       });
//     });
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById setSearchResult={setSearchResult} />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {assists.map((user) => (
//           <Card key={user.id} border="danger" style={cardSize}>
//             <div>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               {user.showDetails && (
//                 <Card.Text>
//                   <h5>:צרו איתי קשר ב</h5>
//                   <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={() => toggleDetails(user.id)}>
//                 {user.showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardSize, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [searchResult, setSearchResult] = useState(null);
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       setAssists(response.data.map(assist => ({ ...assist, showDetails: false })));
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setAssists(prevAssists => {
//       return prevAssists.map(assist => {
//         if (assist.id === id) {
//           return { ...assist, showDetails: !assist.showDetails };
//         } else {
//           return assist;
//         }
//       });
//     });
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById setSearchResult={setSearchResult} />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {assists.map((user) => (
//           <Card key={user.id} border="danger" style={cardSize}>
//             <div>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               {user.showDetails && (
//                 <Card.Text>
//                   <h5>:צרו איתי קשר ב</h5>
//                   <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={() => toggleDetails(user.id)}>
//                 {user.showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardSize, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       setAssists(response.data);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setAssists(prevAssists => {
//       return prevAssists.map(assist => {
//         if (assist.id === id) {
//           return { ...assist, showDetails: !assist.showDetails };
//         } else {
//           return assist;
//         }
//       });
//     });
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {assists.map((user) => (
//           <Card key={user.id} border="danger" style={{ width: '17rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
//             <div>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               {user.showDetails && (
//                 <Card.Text>
//                   <h5>:צרו איתי קשר ב</h5>
//                   <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={() => toggleDetails(user.id)}>
//                 {user.showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// // 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardSize, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [showDetails, setShowDetails] = useState({}); // Object to track which cards should show details
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       const initialShowDetails = {};
//       response.data.forEach(assist => {
//         initialShowDetails[assist.id] = false;
//       });
//       setAssists(response.data);
//       setShowDetails(initialShowDetails);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setShowDetails(prevShowDetails => ({
//       ...prevShowDetails,
//       [id]: !prevShowDetails[id]
//     }));
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {assists.map((user) => (
//           <Card key={user.id} border="danger" style={{ marginBottom: '1rem', maxWidth: '18rem', minWidth: '14rem', width: '100%' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               {showDetails[user.id] && (
//                 <Card.Text>
//                   <h5>:צרו איתי קשר ב</h5>
//                   <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={() => toggleDetails(user.id)} style={{ width: '100%' }}>
//                 {showDetails[user.id] ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardSize, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   useEffect(() => {
//     const fetchAssists = async () => {
//       try {
//         const response = await axios.get('http://localhost:5089/api/Assists');
//         setAssists(response.data);
//       } catch (error) {
//         console.error('Error fetching assists:', error);
//       }
//     };
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setAssists(prevAssists => {
//       return prevAssists.map(assist => {
//         if (assist.id === id) {
//           return { ...assist, showDetails: !assist.showDetails };
//         } else {
//           return { ...assist, showDetails: false }; // Close details for all other cards
//         }
//       });
//     });
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {assists.map((user) => (
//           <Card key={user.id} border="danger" style={{ marginBottom: '1rem', maxWidth: '18rem', minWidth: '14rem', width: '100%',marginLeft:'2.5rem' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               {user.showDetails && (
//                 <Card.Text>
//                   <h5>:צרו איתי קשר ב</h5>
//                   <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={() => toggleDetails(user.id)} /*style={{ width: '100%' }}*/>
//                 {user.showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [showDetails, setShowDetails] = useState({}); // Object to track which cards should show details
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       const initialShowDetails = {};
//       response.data.forEach(assist => {
//         initialShowDetails[assist.id] = false;
//       });
//       setAssists(response.data);
//       setShowDetails(initialShowDetails);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setShowDetails(prevShowDetails => ({
//       ...prevShowDetails,
//       [id]: !prevShowDetails[id]
//     }));
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {assists.map((user) => (
//           <Card
//             key={user.id}
//             border="danger"
//             style={{
//               marginBottom: '1rem',
//               maxWidth: '18rem',
//               minWidth: '14rem',
//               width: '100%',
//               transition: 'all 0.3s ease',
//               height: showDetails[user.id] ? 'auto' : '15rem',
//               marginLeft:'2.5rem',
//               marginRight:'2.5rem',
//             }}
//           >
//             <div style={{ display: 'flex',/* justifyContent: 'space-between', */marginBottom: '0.5rem' }}>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{user.firstName + " " + user.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               {showDetails[user.id] && (
//                 <Card.Text>
//                   <h5>:צרו איתי קשר ב</h5>
//                   <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                   <h5>:או</h5>
//                   <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                   <h7>{user.addressCodeNavigation.city}</h7>
//                 </Card.Text>
//               )}
//               <Button variant="primary" onClick={() => toggleDetails(user.id)} >
//                 {showDetails[user.id] ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card, Collapse } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardContainer, cardContent, cardButton, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [showDetails, setShowDetails] = useState({});
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       const initialShowDetails = {};
//       response.data.forEach(assist => {
//         initialShowDetails[assist.id] = false;
//       });
//       setAssists(response.data);
//       setShowDetails(initialShowDetails);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setShowDetails(prevShowDetails => ({
//       ...prevShowDetails,
//       [id]: !prevShowDetails[id]
//     }));
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById />
//       </div>
//       <div style={cardContainer}>
//         {assists.map((user) => (
//           <Card key={user.id} style={{ ...cardContent, height: showDetails[user.id] ? 'auto' : '15rem' }}>
//             <div style={{ display: 'flex'/*, justifyContent: 'space-between', marginBottom: '0.5rem' */}}>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h5>{user.firstName + " " + user.lastName}</h5>
//                 <h7>:אשמח מאד לקבל סיוע ב</h7>
//                 <h4 className="fw-bolder" style={{ color: 'red'/*, fontFamily: 'cursive'*/ }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               <Collapse in={showDetails[user.id]}>
//                 <div>
//                   <Card.Text>
//                     <h5>:צרו איתי קשר ב</h5>
//                     <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                     <h5>:או</h5>
//                     <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                     <h7>{user.addressCodeNavigation.city}</h7>
//                   </Card.Text>
//                 </div>
//               </Collapse>
//               <Button variant="outline-danger" onClick={() => toggleDetails(user.id)} /*style={cardButton}*/>
//                 {showDetails[user.id] ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card, Collapse } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import GetAssistsById from './GetAssistsById';
// import { cardTextColor, cardContainer, cardContent, cardButton, trashSize } from '../style/Styles';
// import EmailIcon from '../style/EmailIcon';
// import PhoneIcon from '../style/PhoneIcon';
// import TrashIcon from '../style/TrashIcon';
// import EditIcon from '../style/EditIcon';
// const AssistsDetailsFetch = () => {
//   const navigate = useNavigate();
//   const [assists, setAssists] = useState([]);
//   const [openCardId, setOpenCardId] = useState(null);
//     const [searchResult, setSearchResult] = useState(null); 
//   const fetchAssists = async () => {
//     try {
//       const response = await axios.get('http://localhost:5089/api/Assists');
//       setAssists(response.data);
//     } catch (error) {
//       console.error('Error fetching assists:', error);
//     }
//   };
//   useEffect(() => {
//     fetchAssists();
//   }, []);
//   const toggleDetails = (id) => {
//     setOpenCardId(prevId => (prevId === id ? null : id));
//   };
//   return (
//     <>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <GetAssistsById setSearchResult={setSearchResult}/>
//       </div>
//       <div style={cardContainer}>
//         {assists.map((user) => (
//           <Card key={user.id} style={{ ...cardContent, height: openCardId === user.id ? 'auto' : '12rem',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
//             {/* <div style={{ display: 'flex' }}>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//               <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//             </div> */}
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h5>{user.firstName + " " + user.lastName}</h5>
//                 <h7>:תשמח לקבל סיוע ב</h7>
//                 <h4 className="fw-bolder" style={{ color: 'red' }}>{user.categoryCodeNavigation.type}</h4>
//               </Card.Text>
//               <Collapse in={openCardId === user.id}>
//                 <div>
//                   <Card.Text>
//                     <h7>:צרו איתי קשר ב</h7>
//                     <h5><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h5>
//                     <h7>:או</h7>
//                     <h5><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h5>
//                     {/* <h7>{user.addressCodeNavigation.city}</h7> */}
//                     <div style={{ display: 'flex' }}>
//                       <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
//                       <button style={trashSize} onClick={() => navigate(`/update_assist/${user.id}`)}><i className="bi bi-pen"><EditIcon /></i></button>
//                     </div>
//                   </Card.Text>
//                 </div>
//               </Collapse>
//               <Button variant="outline-danger" onClick={() => toggleDetails(user.id)} /*style={cardButton}*/>
//                 {openCardId === user.id ? 'הסתר פרטים' : 'צפו בפרטים'}
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default AssistsDetailsFetch;
"use strict";