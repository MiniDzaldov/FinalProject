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


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Collapse } from 'react-bootstrap';
import EmailIcon from '../style/EmailIcon';
import PhoneIcon from '../style/PhoneIcon';
import TrashIcon from '../style/TrashIcon';
import EditIcon from '../style/EditIcon';
import GetAssistantById from './GetAssistantById';
import DeleteAssistant from './DeleteAssistant';
import UpdateAssistant from './UpdateAssistant';
// import UpdateAssistant from './UpdateAssist';
import { cardTextColor, cardContainer, cardContent, cardButton, trashSize } from '../style/Styles';


const AssistantDetailsFetch = () => {
  const [users, setUsers] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [updateId, setUpdateId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5089/api/Assistants');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const toggleDetails = (id) => {
    setOpenCardId(prevId => (prevId === id ? null : id));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  const handleUpdateClick = (id) => {
    setUpdateId(id);
  };

  return (
    <>
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <GetAssistantById setSearchResult={setSearchResult} />
      </div>
      <div style={cardContainer}>
        {users.map((user) => (
          <Card key={user.id} style={{ ...cardContent, height: openCardId === user.id ? 'auto' : '12rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
            <Card.Body>
              <Card.Text style={cardTextColor}>
                <h5>{user.firstName + " " + user.lastName}</h5>
                <h7>:אשמח מאד לעזור ב</h7>
                <h4 className="fw-bolder" style={{ color: 'green' }}>{user.categoryCodeNavigation.type}</h4>
              </Card.Text>
              <Collapse in={openCardId === user.id}>
                <div>
                  <Card.Text>
                    <h7>:צרו איתי קשר ב</h7>
                    <h6><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h6>
                    <h7>:או</h7>
                    <h6><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h6>
                    <div style={{ display: 'flex' }}>
                      {deleteId === user.id && <DeleteAssistant id={user.id} />}
                      {updateId === user.id && <UpdateAssistant id={user.id} />}
                      <button style={trashSize} onClick={() => navigate(`/delete_assistant/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
                      <button style={trashSize} onClick={() => handleUpdateClick(user.id)}><i className="bi bi-pen"><EditIcon /></i></button>
                    </div>
                  </Card.Text>
                </div>
              </Collapse>
              <Button variant="outline-success" onClick={() => toggleDetails(user.id)}>
                {openCardId === user.id ? 'הסתר פרטים' : 'צפו בפרטים'}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default AssistantDetailsFetch;
