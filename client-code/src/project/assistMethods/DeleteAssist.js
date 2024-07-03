import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteAssist = () => {
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [promptShown, setPromptShown] = useState(false); // State to track if prompt has been shown

  useEffect(() => {
    const handleDelete = async () => {
      setLoading(true);
      setError(null);
      setMessage(null);
      
      try {
        const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
        console.log(response);
        setMessage('Delete successful');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    const checkManagerCode = () => {
      const enteredCode = prompt(':הכנס קוד מנהל');
      if (enteredCode === '123456') {
        handleDelete(); 
        
      } else if (enteredCode !== null) {
        alert('אם אתה לא מנהל אל תנסה...');
      }
      setPromptShown(true); 
    };

    if (!promptShown) {
      checkManagerCode(); 
    }
  }, [promptShown, id]); 

  return (
    <>
      <div>
        {/* <h5>Delete Assist</h5> */}
        {loading ? (
          <p>Deleting...</p>
        ) :
         (
          <>
          onClick={() => navigate('/delete_assist_succesfuly')}
            {/* {message && <div>{message}</div>}
            {error && <div>Error: {error}</div>} */}
          </>
        )
        }
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );    
};

export default DeleteAssist;

