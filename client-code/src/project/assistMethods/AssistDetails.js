import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Collapse, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import GetAssistsById from './GetAssistsById';
import DeleteAssist from './DeleteAssist';
import UpdateAssist from './UpdateAssist';
import EmailIcon from '../style/EmailIcon';
import PhoneIcon from '../style/PhoneIcon';
import TrashIcon from '../style/TrashIcon';
import EditIcon from '../style/EditIcon';
import { blackColor, cardContainer, cardContent, trashSize, editSize, redColor, displayCardsStyle, displayFlex } from '../style/Styles';

const AssistsDetailsFetch = () => {
  const navigate = useNavigate();
  const [assists, setAssists] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const fetchAssists = async () => {
    try {
      const response = await axios.get('http://localhost:5089/api/Assists');
      setAssists(response.data);
    } catch (error) {
      console.error('Error fetching assists:', error);
    }
  };

  useEffect(() => {
    fetchAssists();
  }, []);

  const toggleDetails = (id) => {
    setOpenCardId(prevId => (prevId === id ? null : id));
  };

  const handleDeleteClick = (id) => {
    const enteredId = prompt('הקלד מספר זהות של האדם שברצונך למחוק:');
    if (enteredId === id.toString()) {
      navigate(`/delete_assist/${id}`);
    } else if (enteredId !== null) {
      alert('מספר זהות שגוי, אנא נסה שוב...');
    }
  };

  const handleUpdateClick = (id) => {
    navigate(`/update_assist/${id}`);
  };

  const handleDeleteSuccess = () => {
    fetchAssists();
    setDeleteSuccessMessage('נמחק בהצלחה');
  };

  return (
    <>
      <br />
      <div style={displayCardsStyle}>
        <GetAssistsById setSearchResult={setSearchResult} />
      </div>

      <div style={cardContainer}>
        {assists.map((user) => (
          <Card key={user.id} style={{ ...cardContent, height: openCardId === user.id ? 'auto' : '12rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
            <Card.Body>
              <Card.Text style={blackColor}>
                <h5>{user.firstName + " " + user.lastName}</h5>
                <h7>:תשמח לקבל סיוע ב</h7>
                <h4 className="fw-bolder" style={redColor}>{user.categoryCodeNavigation.type}</h4>
              </Card.Text>
              <Collapse in={openCardId === user.id}>
                <div>
                  <Card.Text>
                    <h6>אני מאזור {user.addressCodeNavigation.city}</h6>
                    <br />
                    <h7>:צרו איתי קשר ב</h7>
                    <h6><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h6>
                    <h7>:או</h7>
                    <h6><i style={blackColor} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h6>
                    <div style={displayFlex}>
                      {deleteId === user.id && <DeleteAssist onDeleteSuccess={handleDeleteSuccess} />}
                      <button style={trashSize} onClick={() => handleDeleteClick(user.id)}><i className="bi bi-trash"><TrashIcon /></i></button>
                      <button style={editSize} onClick={() => handleUpdateClick(user.id)}><i className="bi bi-pen"><EditIcon /></i></button>
                    </div>
                    <br/>
                  </Card.Text>
                </div>
              </Collapse>
             
              <Button variant="outline-danger" onClick={() => toggleDetails(user.id)}>
                {openCardId === user.id ? 'הסתר פרטים' : 'לפרטים נוספים'}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {deleteSuccessMessage &&
        <Alert variant="success">
          <Alert.Heading>הפעולה בוצעה בהצלחה!</Alert.Heading>
          <p>{deleteSuccessMessage}</p>
        </Alert>
      }

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AssistsDetailsFetch;
