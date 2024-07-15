// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate,useParams } from 'react-router-dom';
// import { Button, Card, Container } from 'react-bootstrap';
// import {redColor,deleteCard} from '../style/Styles'


// const DeleteAssist = ({ onDeleteSuccess }) => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [promptShown, setPromptShown] = useState(false); 
//   const [deletedPerson, setDeletedPerson] = useState(null);

//   useEffect(() => {
//     const handleDelete = async () => {
//       setLoading(true);
//       setError(null);
//       setMessage(null);
//       try {
//         const response = await axios.delete(`http://localhost:5089/api/assistants/${id}`);
//         console.log(response);
//         setDeletedPerson(response.data);
//         const successMessage = `${response.data.firstName} ${response.data.lastName} נמחק/ה בהצלחה`;
//         setMessage(successMessage);
//         onDeleteSuccess(successMessage);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const checkPersonId = () => {
//       const enteredId = prompt('הקלד מספר זהות של האדם שברצונך למחוק:');
//       if (enteredId === id) {
//         handleDelete();
//       } else if (enteredId !== null) {
//         alert('מספר זהות שגוי, אנא נסה שוב...');
//       }
//       setPromptShown(true);
//     };

//     if (!promptShown) {
//       checkPersonId();
//     }
//   }, [promptShown, id, onDeleteSuccess]);

//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//      <div>
//         {loading ? (
//           <p>מבצע מחיקה...</p>
//         ) : deletedPerson ? (
//           <div>
//             <center>
//             <Container >
//               <Card style={deleteCard}>
//                 <Card.Body>
//                   <center style={redColor}>
//                   <h3>{deletedPerson.firstName} {deletedPerson.lastName} </h3>
//                   <h4 style={redColor}>נמחק/ה בהצלחה</h4>
//                   </center>
//                   </Card.Body>
//               </Card>
//             </Container>
//             <br/>
//             <br/>
//             <br/>
//             <Button  variant="outline-danger" onClick={() => navigate('/assistant_details')}>חזרה</Button>
//             </center>
//           </div>
//         ) : (
//           <>
//           </>
//         )}
//       </div>

//     </>
//   );
// };

// export default DeleteAssist;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import { redColor, deleteCard } from '../style/Styles';

const DeleteAssistant = ({ onDeleteSuccess }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletedPerson, setDeletedPerson] = useState(null);

  useEffect(() => {
    const handleDelete = async () => {
      setLoading(true);
      setError(null);
      setMessage(null);

      try {
        const response = await axios.delete(`http://localhost:5089/api/assistants/${id}`);
        setDeletedPerson(response.data);
        const successMessage = `${response.data.firstName} ${response.data.lastName} נמחק/ה בהצלחה`;
        setMessage(successMessage);
        onDeleteSuccess(successMessage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    handleDelete();
  }, [id, onDeleteSuccess]);

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        {loading ? (
          <p>מבצע מחיקה...</p>
        ) : deletedPerson ? (
          <div>
            <center>
              <Container>
                <Card style={deleteCard}>
                  <Card.Body>
                    <center style={redColor}>
                      <h3>{deletedPerson.firstName} {deletedPerson.lastName}</h3>
                      <h4 style={redColor}>נמחק/ה בהצלחה</h4>
                    </center>
                  </Card.Body>
                </Card>
              </Container>
              <br />
              <br />
              <br />
              <Button variant="outline-danger" onClick={() => navigate('/assistant_details')}>חזרה</Button>
            </center>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </>
  );
};

export default DeleteAssistant;
