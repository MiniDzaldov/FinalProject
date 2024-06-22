// import React from 'react';
// import axios from 'axios';
// const DeleteAssistantComponent = ({ assistantId, fetchAssistants }) => {
//   const deleteAssistant = async () => {
//     try {
//       await axios.delete(`http://localhost:5089/api/assistants/${assistantId}`);
//       fetchAssistants();
//     } catch (error) {
//       if (error.response) {
//         // השרת הגיב עם קוד שגיאה
//         console.error('Error deleting assistant:', error.response.data);
//         alert(`Error: ${error.response.data}`);
//       } else if (error.request) {
//         // הבקשה נשלחה אך לא התקבלה תגובה
//         console.error('Error deleting assistant: No response received', error.request);
//         alert('Error: No response received from the server.');
//       } else {
//         // משהו קרה בעת הגדרת הבקשה שגרם לשגיאה
//         console.error('Error deleting assistant:', error.message);
//         alert(`Error: ${error.message}`);
//       }
//     }
//   };
//   return (
//     <div>
//       <h2>Delete Assistant:</h2>
//       <button onClick={deleteAssistant}>Delete Assistant</button>
//     </div>
//   );
// };
// export default DeleteAssistantComponent;
"use strict";