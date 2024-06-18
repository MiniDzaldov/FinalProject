import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteAssist = () => {
  const { id } = useParams();
  console.log("ID from URL:", id)
  const [message, setMessage] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

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
  return (
    <div>
      {/* alert('r u sure to delete') */}
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
      {message && <div>{message}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};
export default DeleteAssist;
