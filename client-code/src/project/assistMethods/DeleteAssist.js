import React from 'react';
import axios from 'axios';

const DeleteAssistComponent = ({ assistId, fetchAssists }) => {
  const deleteAssist = async () => {
    try {
      await axios.delete(`http://localhost:5089/api/assists/${assistId}`);
      fetchAssists();
    } catch (error) {
      console.error('Error deleting assist:', error);
    }
  };

  return (
    <div style={{'backgroundColor': "yellow"}}>
      <h2>Delete Assist:</h2>
      <button onClick={deleteAssist}>Delete Assist</button>
    </div>
  );
};

export default DeleteAssistComponent;

