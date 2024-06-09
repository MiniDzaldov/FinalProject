import React, { useState } from 'react';
import axios from 'axios';

const CreateAssistComponent = ({ fetchAssists }) => {
  const [newAssist, setNewAssist] = useState({
    FirstName: '',
    LastName: '',
    NumOfChildren: 0,
    PhoneNumber: '',
    Email: '',
    AddressCode: 0,
    CategoryCode: 0
  });

  const createAssist = async () => {
    try {
      await axios.post('http://localhost:5089/api/assists', newAssist);
      fetchAssists();
    } catch (error) {
      console.error('Error creating assist:', error);
    }
  };

  return (
    <div>
      <h2>Create Assist:</h2>
      <div>
      <input
        type="text"
        placeholder="First Name"
        value={newAssist.FirstName}
        onChange={(e) => setNewAssist({ ...newAssist, FirstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newAssist.LastName}
        onChange={(e) => setNewAssist({ ...newAssist, LastName: e.target.value })}
      />
        <button onClick={createAssist}>Create Assist</button>
      </div>
    </div>
  );
};

export default CreateAssistComponent;
