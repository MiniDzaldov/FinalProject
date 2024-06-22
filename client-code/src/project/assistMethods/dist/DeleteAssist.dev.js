// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id)
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const handleDelete = async () => {
//     setLoading(true);
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//       console.log(response);
//       setMessage('Delete successful');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         <button onClick={handleDelete} disabled={loading}>
//           {loading ? 'Deleting...' : 'Delete'}
//         </button>
//         {message && <div>{message}</div>}
//         {error && <div>Error: {error}</div>}
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default DeleteAssist;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id)
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const handleDelete = async () => {
//     // Show confirmation alert
//     const confirmed = window.confirm("Are you sure you want to delete?");
//     if (!confirmed) {
//       return; // If not confirmed, exit function
//     }
//     useEffect(() => {
//       // This function runs once when the component mounts
//       alert('This is an alert message!');
//     }, []); // Empty dependency array ensures it runs only once
//     setLoading(true);
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//       console.log(response);
//       setMessage('Delete successful');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         <h5>alert example</h5>
//       </div>
//       <div>
//         <button /*onClick={handleDelete}*/ disabled={loading}>
//           {loading ? 'Deleting...' : 'Delete'}
//         </button>
//         {message && <div>{message}</div>}
//         {error && <div>Error: {error}</div>}
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default DeleteAssist;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id);
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // Show alert when component mounts
//     alert('Are you sure you want to delete?');
//   }, []); // Empty dependency array ensures it runs only once
//   const handleDelete = async () => {
//     // Show confirmation dialog
//     const confirmed = window.confirm('Are you sure you want to delete?');
//     // If user clicks Cancel
//     if (!confirmed) {
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//       console.log(response);
//       setMessage('Delete successful');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         <h5>Alert Example</h5>
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </>
//   );
// };
// export default DeleteAssist;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id);
//   const [managerCode, setManagerCode] = useState('');
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const handleDelete = async () => {
//     // Prompt user for manager code
//     const enteredCode = prompt('Please enter manager code:');
//     // Check if manager code matches
//     if (enteredCode !== '123456') {
//       alert('If you are not a manager, please do not attempt to delete.'); // Show alert if code is incorrect
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//       console.log(response);
//       setMessage('Delete successful');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         <button onClick={handleDelete} disabled={loading}>
//           {loading ? 'Deleting...' : 'Delete'}
//         </button>
//         {message && <div>{message}</div>}
//         {error && <div>Error: {error}</div>}
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };
// export default DeleteAssist;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id);
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // Prompt user for manager code when component mounts
//     const enteredCode = prompt('Please enter manager code:');
//     // Check if manager code matches
//     if (enteredCode !== '123456') {
//       alert('If you are not a manager, please do not attempt to delete.'); // Show alert if code is incorrect
//       return;
//     }
//     // If manager code is correct, proceed with delete operation
//     handleDelete();
//   }, []); // Empty dependency array ensures it runs only once
//   const handleDelete = async () => {
//     setLoading(true);
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//       console.log(response);
//       setMessage('Delete successful');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         {/* <h5>Delete Assist</h5> */}
//         {loading ? (
//           <p>Deleting...</p>
//         ) : (
//           <>
//             {message && <div>{message}</div>}
//             {error && <div>Error: {error}</div>}
//           </>
//         )}
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };
// export default DeleteAssist;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id);
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [alertShown, setAlertShown] = useState(false); // State to track if alert has been shown
//   useEffect(() => {
//     // Show alert when component mounts if it hasn't been shown already
//     if (!alertShown) {
//       const enteredCode = prompt('Please enter manager code:');
//       setAlertShown(true); // Mark alert as shown
//       if (enteredCode !== '123456') {
//         alert('If you are not a manager, please do not attempt to delete.');
//         return;
//       }
//     }
//     // If alert has been shown or manager code is correct, proceed with delete operation
//     handleDelete();
//   }, [alertShown]); // useEffect will re-run only if alertShown changes
//   const handleDelete = async () => {
//     setLoading(true);
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//       console.log(response);
//       setMessage('Delete successful');
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         <h5>Delete Assist</h5>
//         {loading ? (
//           <p>Deleting...</p>
//         ) : (
//           <>
//             {message && <div>{message}</div>}
//             {error && <div>Error: {error}</div>}
//           </>
//         )}
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };
// export default DeleteAssist;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const DeleteAssist = () => {
//   const { id } = useParams();
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [promptShown, setPromptShown] = useState(false); // State to track if prompt has been shown
//   useEffect(() => {
//     // Function to handle delete operation
//     const handleDelete = async () => {
//       setLoading(true);
//       setError(null);
//       setMessage(null);
//       try {
//         const response = await axios.delete(`http://localhost:5089/api/assists/${id}`);
//         console.log(response);
//         setMessage('Delete successful');
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     // Show prompt and check manager code when component mounts
//     const checkManagerCode = () => {
//       const enteredCode = prompt(':הכנס קוד מנהל');
//       if (enteredCode === '123456') {
//         handleDelete(); // Call handleDelete if code is correct
//       } else if (enteredCode !== null) {
//         alert('אם אתה לא מנהל אל תנסה...');
//       }
//       setPromptShown(true); // Mark prompt as shown
//     };
//     if (!promptShown) {
//       checkManagerCode(); // Call checkManagerCode only if prompt has not been shown
//     }
//   }, [promptShown, id]); // useEffect will re-run if promptShown or id changes
//   return (
//     <>
//       <div>
//         {/* <h5>Delete Assist</h5> */}
//         {loading ? (
//           <p>Deleting...</p>
//         ) : (
//           <>
//             {message && <div>{message}</div>}
//             {error && <div>Error: {error}</div>}
//           </>
//         )}
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };
// export default DeleteAssist;
"use strict";