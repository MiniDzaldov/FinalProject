import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Collapse } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import GetAssistsById from './GetAssistsById';
import DeleteAssist from './DeleteAssist'; // Import DeleteAssist component
import UpdateAssist from './UpdateAssist'; // Import UpdateAssist component
import { cardTextColor, cardContainer, cardContent, cardButton, trashSize } from '../style/Styles';
import EmailIcon from '../style/EmailIcon';
import PhoneIcon from '../style/PhoneIcon';
import TrashIcon from '../style/TrashIcon';
import EditIcon from '../style/EditIcon';

const AssistsDetailsFetch = () => {
  const navigate = useNavigate();
  const [assists, setAssists] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);
  const [searchResult, setSearchResult] = useState(null); 
  const [deleteId, setDeleteId] = useState(null); // State to track which user's delete component to show
  const [updateId, setUpdateId] = useState(null); // State to track which user's update component to show

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
    setDeleteId(id); // Set the ID of the user to delete
  };

  const handleUpdateClick = (id) => {
    setUpdateId(id); // Set the ID of the user to update
  };

  return (
    <>
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <GetAssistsById setSearchResult={setSearchResult}/>
      </div>
      
      <div style={cardContainer}>
        {assists.map((user) => (
          <Card key={user.id} style={{ ...cardContent, height: openCardId === user.id ? 'auto' : '12rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
            <Card.Body>
              <Card.Text style={cardTextColor}>
                <h5>{user.firstName + " " + user.lastName}</h5>
                <h7>:תשמח לקבל סיוע ב</h7>
                <h4 className="fw-bolder" style={{ color: 'red' }}>{user.categoryCodeNavigation.type}</h4>
              </Card.Text>
              <Collapse in={openCardId === user.id}>
                <div>
                  <Card.Text>
                    <h7>:צרו איתי קשר ב</h7>
                    <h6><i className="bi bi-telephone"><PhoneIcon /></i> {user.phoneNumber}</h6>
                    <h7>:או</h7>
                    <h6><i style={{ color: 'black' }} className="bi bi-envelope"><EmailIcon /></i> {user.email}</h6>
                    <div style={{ display: 'flex' }}>
                      {deleteId === user.id && <DeleteAssist id={user.id} />}
                      {updateId === user.id && <UpdateAssist id={user.id} />}
                      {/* Buttons to trigger delete and update */}
                      {/* <button style={trashSize} onClick={() => handleDeleteClick(user.id)}><i className="bi bi-trash"><TrashIcon /></i></button> */}
                      <button style={trashSize} onClick={() => navigate(`/delete_assist/${user.id}`)}><i className="bi bi-trash"><TrashIcon /></i></button>

                      <button style={trashSize} onClick={() => handleUpdateClick(user.id)}><i className="bi bi-pen"><EditIcon /></i></button>
                    </div>
                  </Card.Text>
                </div>
              </Collapse>
              <Button variant="outline-danger" onClick={() => toggleDetails(user.id)}>
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
export default AssistsDetailsFetch;