import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssistsComponent = () => {
  const [assists, setAssists] = useState([]);
  const [newAssist, setNewAssist] = useState({
    FirstName: '',
    LastName: '',
    NumOfChildren: 0,
    PhoneNumber: '',
    Email: '',
    AddressCode: 0,
    CategoryCode: 0
  });
  const [selectedAssistId, setSelectedAssistId] = useState(null);

  const fetchAssists = async () => {
    try {
      const response = await axios.get('your-api-endpoint/assists');
      setAssists(response.data);
    } catch (error) {
      console.error('Error fetching assists:', error);
    }
  };

  const createAssist = async () => {
    try {
      await axios.post('your-api-endpoint/assists', newAssist);
      fetchAssists();
    } catch (error) {
      console.error('Error creating assist:', error);
    }
  };

  const updateAssist = async () => {
    try {
      await axios.put(`your-api-endpoint/assists/${selectedAssistId}`, newAssist);
      fetchAssists();
    } catch (error) {
      console.error('Error updating assist:', error);
    }
  };

  const deleteAssist = async (id) => {
    try {
      await axios.delete(`your-api-endpoint/assists/${id}`);
      fetchAssists();
    } catch (error) {
      console.error('Error deleting assist:', error);
    }
  };

  const fetchAssistById = async (id) => {
    try {
      const response = await axios.get(`your-api-endpoint/assists/${id}`);
      setNewAssist(response.data);
      setSelectedAssistId(id);
    } catch (error) {
      console.error('Error fetching assist by id:', error);
    }
  };

  useEffect(() => {
    fetchAssists();
  }, []);

  return (
    <div>
      <h2>Assists Data:</h2>
      <ul>
        {assists.map((assist) => (
          <li key={assist.Id}>
            {assist.FirstName} {assist.LastName} - {assist.NumOfChildren} children
            <button onClick={() => fetchAssistById(assist.Id)}>Edit</button>
            <button onClick={() => deleteAssist(assist.Id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create / Update Assist:</h2>
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
        <input
          type="number"
          placeholder="Number of Children"
          value={newAssist.NumOfChildren}
          onChange={(e) => setNewAssist({ ...newAssist, NumOfChildren: parseInt(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newAssist.PhoneNumber}
          onChange={(e) => setNewAssist({ ...newAssist, PhoneNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newAssist.Email}
          onChange={(e) => setNewAssist({ ...newAssist, Email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Address Code"
          value={newAssist.AddressCode}
          onChange={(e) => setNewAssist({ ...newAssist, AddressCode: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Category Code"
          value={newAssist.CategoryCode}
          onChange={(e) => setNewAssist({ ...newAssist, CategoryCode: parseInt(e.target.value) })}
        />
        <button onClick={selectedAssistId ? updateAssist : createAssist}>
          {selectedAssistId ? 'Update Assist' : 'Create Assist'}
        </button>
      </div>
    </div>
  );
};

export default AssistsComponent;
