import React, { useState } from 'react';
import axios from 'axios';

const UpdateAssistComponent = ({ assistId, fetchAssists }) => {
  const [updatedAssist, setUpdatedAssist] = useState({
    FirstName: '',
    LastName: '',
    NumOfChildren: 0,
    PhoneNumber: '',
    Email: '',
    AddressCode: 0,
    CategoryCode: 0
  });

  const updateAssist = async () => {
    try {
      await axios.put(`http://localhost:5089/api/assists/${assistId}`, updatedAssist);
      fetchAssists();
    } catch (error) {
      console.error('Error updating assist:', error);
    }
  };

  return (
    <div>
      <h2>Update Assist:</h2>
      <div>
      <input
        type="text"
        placeholder="First Name"
        value={updatedAssist.FirstName}
        onChange={(e) => setUpdatedAssist({ ...updatedAssist, FirstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={updatedAssist.LastName}
        onChange={(e) => setUpdatedAssist({ ...updatedAssist, LastName: e.target.value })}
      />
        <button onClick={updateAssist}>Update Assist</button>
      </div>
    </div>
  );
};

export default UpdateAssistComponent;
