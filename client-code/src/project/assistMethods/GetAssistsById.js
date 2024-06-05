import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAssistsById = ({ assistId }) => {
  const [assist, setAssist] = useState(null);
  const color={"color": "black", "fontsize":"5px"}


  const fetchAssistById = async () => {
    try {
    //   const response = await axios.get(`http://localhost:5089/api/Assists${assistId}`);
    const response = await axios.get(`http://localhost:5089/api/Assists/215487888`);
      setAssist(response.data);
    } catch (error) {
      console.error('Error fetching assist by id:', error);
      console.log(error);
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
      <h2 style={color}>Assist {assist.data} Details:</h2>
      <div>
        <p style={color}>Assist ID: {assist.assistId}</p>
        <p style={color}>Assist Name: {assist.name}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );  
};

export default GetAssistsById;
