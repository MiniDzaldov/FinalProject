// import React, { useState } from 'react';
// import axios from 'axios';
// import { searchButtonstyle, searchStyle, searchDivStyle, inputStyle, errorStyle, cardTextColor, cardSize, trashSize } from '../style/Styles'
// import { Card } from 'react-bootstrap';
// import PhoneIcon from '../style/PhoneIcon';
// import EmailIcon from '../style/EmailIcon';
// import SearchIcon from '../style/SearchIcon';
// import EditIcon from '../style/EditIcon';
// import TrashIcon from '../style/TrashIcon';

// const GetAssistsById = () => {
//   const [id, setId] = useState('');
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [validationError, setValidationError] = useState('');
//   const [notFoundError, setNotFoundError] = useState('');

//   const handleInputChange = (event) => {
//     setId(event.target.value);
//     setValidationError('');
//     setNotFoundError('');
//   };

//   const validateId = (id) => {
//     const isValid = /^\d{9}$/.test(id);
//     return isValid;
//   };

//   const handleFetch = async () => {
//     if (!validateId(id)) {
//       setValidationError('מספר זהות חייב להיות בן 9 ספרות');
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     setData(null);

//     try {
//       const response = await axios.get(`http://localhost:5089/api/assists/${id}`); // Fetch data by ID
//       if (response.data) {
//         console.log(response.data)
//         setData(response.data);
//       } else {
//         setNotFoundError('מספר זהות לא נמצא');
//       }
//     } catch (err) {
//       if (err.response) {
//         if (err.response.status === 404) {
//           setNotFoundError('מספר זהות לא נמצא');
//         } else {
//           setError(err.message);
//         }
//       } else {
//         setError(err.message);
//       }
//     }
//     finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div >
//         <div style={searchDivStyle}>
//           <input
//             type="text"
//             value={id}
//             onChange={handleInputChange}
//             placeholder="הקלד כאן מספר זהות"
//             style={inputStyle}
//           />
//           <button
//             onClick={handleFetch}
//             disabled={loading || !id}
//             style={searchButtonstyle}>
//             <i class="bi bi-search" style={searchStyle}><SearchIcon /></i>
//           </button>
//         </div>
//         {validationError && <div><h6 style={errorStyle}>{validationError}</h6></div>}
//         {notFoundError && <div><h6 style={errorStyle}>{notFoundError}</h6></div>}
//         {error && <div><h6 style={errorStyle}>Error: {error}</h6></div>}
//       </div>
//       <canter>
//         {data && (
//           <Card border="danger" style={cardSize}>
//             <div>
//               <button style={trashSize} onClick={() => navigate(`/delete_assist/${data.id}`)}>
//                 <i className="bi bi-trash"><TrashIcon/></i>
//               </button>

//               <button style={trashSize} onClick={() => navigate(`/update_assist/${data.id}`)}>
//                 <i className="bi bi-pen"><EditIcon/></i>
//               </button>
//             </div>
//             <Card.Body>
//               <Card.Text style={cardTextColor}>
//                 <h4>{data.firstName + " " + data.lastName}</h4>
//                 <h5>:אשמח מאד לקבל סיוע ב</h5>
//                 <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{data.categoryCodeNavigation.type}</h4>
//                 <h5> :צרו איתי קשר ב</h5>
//                 <h5> <i className="bi bi-telephone"> <PhoneIcon /></i> {data.phoneNumber}</h5>
//                 <h5>:או</h5>
//                 <h5> <i style={{ color: 'black' }} className="bi bi-envelope"> <EmailIcon /></i>{data.email}</h5>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         )}
//       </canter>
//     </>
//   );
// };

// export default GetAssistsById;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner, Card } from 'react-bootstrap';
import { searchButtonstyle, searchStyle, searchDivStyle, inputStyle, errorStyle, cardTextColor, cardSize, trashSize } from '../style/Styles';
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

    try {
      const response = await axios.get(`http://localhost:5089/api/assists/${id}`);
      if (response.data) {
        setData(response.data);
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

  return (
    <>
      <div>
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
      <div >
        {data && (
          <Card border="danger" style={cardSize}>
            <div>
              <button style={trashSize} onClick={() => navigate(`/delete_assist/${data.id}`)}>
                <TrashIcon />
              </button>
              <button style={trashSize} onClick={() => navigate(`/update_assist/${data.id}`)}>
                <EditIcon />
              </button>
            </div>
            <Card.Body>
              <Card.Text style={cardTextColor}>
                <h4>{data.firstName + " " + data.lastName}</h4>
                <h5>:אשמח מאד לקבל סיוע ב</h5>
                <h4 className="fw-bolder" style={{ color: 'red', fontFamily: 'cursive' }}>{data.categoryCodeNavigation.type}</h4>
                <h5> :צרו איתי קשר ב</h5>
                <h5> <i className="bi bi-telephone"> <PhoneIcon /></i> {data.phoneNumber}</h5>
                <h5>:או</h5>
                <h5> <i style={{ color: 'black' }} className="bi bi-envelope"> <EmailIcon /></i>{data.email}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};

export default GetAssistsById;

