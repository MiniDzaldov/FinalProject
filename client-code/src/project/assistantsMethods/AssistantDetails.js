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
import { blackColor, cardContainer, cardContent, trashSize,displayCardsStyle,greenColor,displayFlex } from '../style/Styles';

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
      <div style={displayCardsStyle}>
        <GetAssistantById setSearchResult={setSearchResult} />
      </div>
      <div style={cardContainer}>
        {users.map((user) => (
          <Card key={user.id} style={{ ...cardContent, height: openCardId === user.id ? 'auto' : '12rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
            <Card.Body>
              <Card.Text style={blackColor}>
                <h5>{user.firstName + " " + user.lastName}</h5>
                <h7>:אשמח מאד לעזור ב</h7>
                <h4 className="fw-bolder" style={greenColor}>{user.categoryCodeNavigation.type}</h4>
              </Card.Text>
              <Collapse in={openCardId === user.id}>
                <div>
                  <Card.Text>
                    <h7>:צרו איתי קשר ב</h7>
                    <h6><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h6>
                    <h7>:או</h7>
                    <h6><i style={blackColor} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h6>
                    <div style={displayFlex}>
                      {deleteId === user.id && <DeleteAssistant id={user.id} />}
                      {updateId === user.id && <UpdateAssistant id={user.id} />}
                      <button style={trashSize} onClick={() => navigate(`/delete_assistant/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>
                      <button style={trashSize} onClick={() => handleUpdateClick(user.id)}><i className="bi bi-pen"><EditIcon /></i></button>
                    </div>
                  </Card.Text>
                </div>
              </Collapse>
              <Button variant="outline-success" onClick={() => toggleDetails(user.id)}>
                {openCardId === user.id ? 'הסתר פרטים': 'לפרטים נוספים'}
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
