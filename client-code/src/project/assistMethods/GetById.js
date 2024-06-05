import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchAssistByIdComponent = ({ assistId }) => {
  const [assist, setAssist] = useState(null);

  const fetchAssistById = async () => {
    try {
      const response = await axios.get(`http://localhost:5089/api/Assists${assistId}`);
      setAssist(response.data);
    } catch (error) {
      console.error('Error fetching assist by id:', error);
    }
  };

  useEffect(() => {
    fetchAssistById();
  }, [assistId]);

  if (!assist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Assist Details:</h2>
      <div>
        {/* Render assist details here */}
      </div>
    </div>
  );
};

export default FetchAssistByIdComponent;
