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
    // Function to handle delete operation
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

    // Show prompt and check manager code when component mounts
    const checkManagerCode = () => {
      const enteredCode = prompt(':הכנס קוד מנהל');
      if (enteredCode === '123456') {
        handleDelete(); // Call handleDelete if code is correct
      } else if (enteredCode !== null) {
        alert('אם אתה לא מנהל אל תנסה...');
      }
      setPromptShown(true); // Mark prompt as shown
    };

    if (!promptShown) {
      checkManagerCode(); // Call checkManagerCode only if prompt has not been shown
    }
  }, [promptShown, id]); // useEffect will re-run if promptShown or id changes

  return (
    <>
      <div>
        {/* <h5>Delete Assist</h5> */}
        {loading ? (
          <p>Deleting...</p>
        ) :
         (
          <>
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

