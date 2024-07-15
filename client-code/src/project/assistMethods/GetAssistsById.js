import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner, Card, Button, Collapse } from 'react-bootstrap';
import { searchButtonstyle, searchStyle, searchDivStyle, inputStyle, errorStyle, blackColor, cardContainer, cardContent, cardButton, trashSize, redColor,editSize } from '../style/Styles';
import PhoneIcon from '../style/PhoneIcon';
import EmailIcon from '../style/EmailIcon';
import SearchIcon from '../style/SearchIcon';
import EditIcon from '../style/EditIcon';
import TrashIcon from '../style/TrashIcon';

const GetAssistsById = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState('');
  const [notFoundError, setNotFoundError] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setId(event.target.value);
    setValidationError('');
    setNotFoundError('');
  };

  const validateId = (id) => {
    const isValid = /^\d{9}$/.test(id);
    return isValid;
  };

  const handleFetch = async () => {
    if (!validateId(id)) {
      setValidationError('מספר זהות חייב להיות בן 9 ספרות');
      return;
    }
    setLoading(true);
    setError(null);
    setData(null);
    setShowDetails(false);

    try {
      const response = await axios.get(`http://localhost:5089/api/assists/${id}`);
      if (response.data) {
        setData(response.data);
        setShowDetails(true);
      } else {
        setNotFoundError('מספר זהות לא נמצא');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setNotFoundError('מספר זהות לא נמצא');
        } else {
          setError(err.message);
        }
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div style={{}}>
        <div style={searchDivStyle}>
          <input
            type="text"
            value={id}
            onChange={handleInputChange}
            placeholder="הקלד כאן מספר זהות"
            style={inputStyle}
          />
          <button
            onClick={handleFetch}
            disabled={loading || !id}
            style={searchButtonstyle}
          >
            <i className="bi bi-search" style={searchStyle}><SearchIcon /></i>
          </button>
        </div>
        {validationError && <div><h6 style={errorStyle}>{validationError}</h6></div>}
        {notFoundError && <div><h6 style={errorStyle}>{notFoundError}</h6></div>}
        {error && <div><h6 style={errorStyle}>Error: {error}</h6></div>}
        {loading && <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>}
      </div>
      <div style={cardContainer}>
        {data && (
          <Card key={data.id} style={{width:'35rem'}}/*style={{ ...cardContent, height: showDetails ? 'auto' : '12rem' }}*/>
            <Card.Body style={{width:'35rem'}}>
              <Card.Text style={blackColor}>
                <h5>{data.firstName + " " + data.lastName}</h5>
                <h7>:אשמח מאד לקבל סיוע ב</h7>
                <h4 className="fw-bolder" style={redColor}>{data.categoryCodeNavigation.type}</h4>
              </Card.Text>
              <h6>אני מאזור {data.addressCodeNavigation.city}</h6>
              <h6 style={redColor}>:הכתובת שלי</h6>
              <h6>רחוב {data.addressCodeNavigation.street} {data.addressCodeNavigation.numOfBuilding}</h6>
              <center><h6>דירה מספר {data.addressCodeNavigation.aptNumber} </h6></center>
<br/>

              <Collapse in={showDetails}>
                <div>
                  <Card.Text>
                    <h7>:צרו איתי קשר ב</h7>
                    <h6><i className="bi bi-telephone"><PhoneIcon /></i>       {data.phoneNumber}</h6>
                    <h7>:או</h7>
                    <h6><i style={blackColor} className="bi bi-envelope"><EmailIcon /></i> {data.email}</h6>
                    <br />
                    {/* <h6 style={redColor}>:הכתובת שלי</h6>
                    <h6>רחוב {data.addressCodeNavigation.street} {data.addressCodeNavigation.numOfBuilding}</h6>
                    <center><h6>דירה מספר {data.addressCodeNavigation.aptNumber} </h6></center> */}

                    <div style={{ display: 'flex', /*justifyContent: 'space-evenly',*/ marginBottom: '0.5rem' }}>
                      <button style={trashSize} onClick={() => navigate(`/delete_assist/${data.id}`)}><TrashIcon /> </button>
                      <button style={editSize} onClick={() => navigate(`/update_assist/${data.id}`)}><EditIcon /></button>
                    </div>
                  </Card.Text>
                </div>
              </Collapse>
              {/* <Button variant="outline-danger" onClick={toggleDetails} style={cardButton}>
                {showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
              </Button> */}
            </Card.Body>
          </Card>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default GetAssistsById;




