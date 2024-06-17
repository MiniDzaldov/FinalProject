// import React, { useState } from 'react';
// import axios from 'axios';

// const UpdateAssistComponent = ({ assistId, fetchAssists }) => {
//   const [updatedAssist, setUpdatedAssist] = useState({
//     FirstName: '',
//     LastName: '',
//     NumOfChildren: 0,
//     PhoneNumber: '',
//     Email: '',
//     AddressCode: 0,
//     CategoryCode: 0
//   });

//   const updateAssist = async () => {
//     try {
//       await axios.put(`http://localhost:5089/api/assists/${assistId}`, updatedAssist);
//       fetchAssists();
//     } catch (error) {
//       console.error('Error updating assist:', error);
//     }
//   };
//   return (
//     <div>
//       <h2>Update Assist:</h2>
//       <div>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={updatedAssist.FirstName}
//         onChange={(e) => setUpdatedAssist({ ...updatedAssist, FirstName: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={updatedAssist.LastName}
//         onChange={(e) => setUpdatedAssist({ ...updatedAssist, LastName: e.target.value })}
//       />
//         <button onClick={updateAssist}>Update Assist</button>
//       </div>
//     </div>
//   );
// };

// export default UpdateAssistComponent;

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateAssist = ({fetchAssists }) => {
  const { id } = useParams();
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
      await axios.put(`http://localhost:5089/api/assists/${id}`, updatedAssist);
      fetchAssists();
    } catch (error) {
      console.error('Error updating assist:', error);
      // Handle specific errors or show a general message to the user
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
        <input
          type="number"
          placeholder="Number of Children"
          value={updatedAssist.NumOfChildren}
          onChange={(e) => setUpdatedAssist({ ...updatedAssist, NumOfChildren: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={updatedAssist.PhoneNumber}
          onChange={(e) => setUpdatedAssist({ ...updatedAssist, PhoneNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={updatedAssist.Email}
          onChange={(e) => setUpdatedAssist({ ...updatedAssist, Email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Address Code"
          value={updatedAssist.AddressCode}
          onChange={(e) => setUpdatedAssist({ ...updatedAssist, AddressCode: e.target.value })}
        />
        <input
          type="number"
          placeholder="Category Code"
          value={updatedAssist.CategoryCode}
          onChange={(e) => setUpdatedAssist({ ...updatedAssist, CategoryCode: e.target.value })}
        />
        <button onClick={updateAssist}>Update Assist</button>
      </div>
    </div>
  );
};

export default UpdateAssist;

