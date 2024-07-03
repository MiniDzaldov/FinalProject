// // import React, { useState } from 'react';
// // import axios from 'axios';
// // const UpdateAssistComponent = ({ assistId, fetchAssists }) => {
// //   const [updatedAssist, setUpdatedAssist] = useState({
// //     FirstName: '',
// //     LastName: '',
// //     NumOfChildren: 0,
// //     PhoneNumber: '',
// //     Email: '',
// //     AddressCode: 0,
// //     CategoryCode: 0
// //   });
// //   const updateAssist = async () => {
// //     try {
// //       await axios.put(`http://localhost:5089/api/assists/${assistId}`, updatedAssist);
// //       fetchAssists();
// //     } catch (error) {
// //       console.error('Error updating assist:', error);
// //     }
// //   };
// //   return (
// //     <div>
// //       <h2>Update Assist:</h2>
// //       <div>
// //       <input
// //         type="text"
// //         placeholder="First Name"
// //         value={updatedAssist.FirstName}
// //         onChange={(e) => setUpdatedAssist({ ...updatedAssist, FirstName: e.target.value })}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Last Name"
// //         value={updatedAssist.LastName}
// //         onChange={(e) => setUpdatedAssist({ ...updatedAssist, LastName: e.target.value })}
// //       />
// //         <button onClick={updateAssist}>Update Assist</button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default UpdateAssistComponent;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const UpdateAssist = ({fetchAssists }) => {
//   const { id } = useParams();
//   const [updatedAssist, setUpdatedAssist] = useState({
//     Id:'',
//     FirstName: '',
//     LastName: '',
//     NumOfChildren: 0,
//     PhoneNumber: '',
//     Email: '',
//     categoryCode: '',
//       address: {
//         city: '',
//         street:'',
//         numofbuilding: '',
//         aptnumber: '',
//         zipcode: ''
//       }
//   });
//   const updateAssist = async () => {
//     try {
//       await axios.put(`http://localhost:5089/api/assists/${id}`, updatedAssist);
//       fetchAssists();
//     } catch (error) {
//       console.error('Error updating assist:', error);
//       // Handle specific errors or show a general message to the user
//     }
//   };
//   return (
//     <div>
//       <h2>Update Assist:</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="First Name"
//           value={updatedAssist.FirstName}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, FirstName: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={updatedAssist.LastName}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, LastName: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Number of Children"
//           value={updatedAssist.NumOfChildren}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, NumOfChildren: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={updatedAssist.PhoneNumber}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, PhoneNumber: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Email"
//           value={updatedAssist.Email}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, Email: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Address Code"
//           value={updatedAssist.AddressCode}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, AddressCode: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Category Code"
//           value={updatedAssist.CategoryCode}
//           onChange={(e) => setUpdatedAssist({ ...updatedAssist, CategoryCode: e.target.value })}
//         />
//         <button onClick={updateAssist}>Update Assist</button>
//       </div>
//     </div>
//   );
// };
// export default UpdateAssist;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
// import { centeredInputStyle } from '../style/Styles';
// import { useParams, useNavigate } from 'react-router-dom';
// const UpdateAssist = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [assist, setAssist] = useState({});
//   const [helpCategory, setHelpCategory] = useState([]);
//   const { register, handleSubmit, formState: { errors }, setValue, } = useForm();
//   useEffect(() => {
//     fetch('http://localhost:5089/api/categories')
//       .then((res) => res.json())
//       .then((data) => {
//         setHelpCategory(data);
//         setValue("categoryCode", data[0]?.code);
//       });
//   }, [setValue]);
//   useEffect(() => {
//     const fetchAssist = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5089/api/assists/${id}`);
//         const assistData = response.data;
//         setAssist(assistData);
//         // Set default form values
//         setValue("id", assistData.id);
//         setValue("firstName", assistData.firstName);
//         setValue("lastName", assistData.lastName);
//         setValue("numOfChildren", assistData.numOfChildren);
//         setValue("phonenumber", assistData.phoneNumber);
//         setValue("email", assistData.email);
//         setValue("categoryCode", assistData.categoryCode);
//         setValue("street", assistData.addressCodeNavigation.street);
//         setValue("city", assistData.addressCodeNavigation.city);
//         setValue("numofbuilding", assistData.addressCodeNavigation.numOfBuilding);
//         setValue("aptnumber", assistData.addressCodeNavigation.aptNumber);
//         setValue("zipcode", assistData.addressCodeNavigation.zipCode);
//       } catch (error) {
//         console.error('Error fetching data', error);
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAssist();
//   }, [id, setValue]);
//   const onSubmit = async (formData) => {
//     try {
//       const dataToSend = {
//         id: formData.id,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         numOfChildren: formData.numOfChildren,
//         phoneNumber: formData.phonenumber,
//         email: formData.email,
//         categoryCode: formData.categoryCode,
//         AddressCodeNavigation: {
//           street: formData.street,
//           city: formData.city,
//           numOfBuilding: formData.numofbuilding,
//           aptNumber: formData.aptnumber,
//           zipCode: formData.zipcode
//         }
//       };
//       const response = await axios.put(`http://localhost:5089/api/assists/${formData.id}`, dataToSend);
//       console.log('Data updated successfully', response.data);
//       navigate(`/assist/${formData.id}`);
//     } catch (error) {
//       console.error('Error updating data', error);
//       setError('Error updating data');
//     }
//   };
//   if (loading) return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
//   if (error) return <p>{error}</p>;
//   return (
//     <>
//     <h7> קולולולו</h7>
//       <center>
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               <div className="border border-danger p-4 rounded">
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicID">
//                       <Form.Control type="text" placeholder="מספר זהות" style={centeredInputStyle}
//                       {...register("id", {
//                         required: "שדה זה הינו שדה חובה",
//                         maxLength: { value: 9, message: "מספר זהות חייב להכיל עד 9 תווים" }
//                       })} readOnly />
//                       {errors.id && <span style={{ color: 'red' }}>{errors.id.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicLastName">
//                       <Form.Control type="text" placeholder="שם משפחה" style={centeredInputStyle}
//                       {...register("lastName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicFirstName">
//                       <Form.Control type="text" placeholder="שם פרטי" style={centeredInputStyle}
//                       {...register("firstName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicNumOfChildren">
//                       <Form.Control type="number" placeholder="מספר ילדים" style={centeredInputStyle}
//                       {...register("numOfChildren", {
//                         required: "שדה זה הינו שדה חובה",
//                         min: { value: 0, message: "מספר הילדים חייב להיות חיובי" }
//                       })} />
//                       {errors.numOfChildren && <span style={{ color: 'red' }}>{errors.numOfChildren.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicEmail">
//                       <Form.Control type="email" placeholder="דוא''ל" style={centeredInputStyle}
//                       {...register("email", {
//                         required: "שדה זה הינו שדה חובה",
//                         pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "דוא''ל אינו חוקי" }
//                       })} />
//                       {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicPhoneNumber">
//                       <Form.Control type="text" placeholder="מספר פלאפון" style={centeredInputStyle}
//                       {...register("phonenumber", {
//                         required: "שדה זה הינו שדה חובה",
//                         pattern: { value: /^[0-9]{10}$/, message: "מספר פלאפון חייב להכיל 10 ספרות" }
//                       })} />
//                       {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicStreet">
//                       <Form.Control type="text" placeholder="רחוב" style={centeredInputStyle}
//                       {...register("street", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.street && <span style={{ color: 'red' }}>{errors.street.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicCity">
//                       <Form.Control type="text" placeholder="עיר / יישוב" style={centeredInputStyle}
//                       {...register("city", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.city && <span style={{ color: 'red' }}>{errors.city.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicAptNumber">
//                       <Form.Control type="number" placeholder="מספר דירה" style={centeredInputStyle}
//                       {...register("aptnumber", {
//                         required: "שדה זה הינו שדה חובה",
//                         min: { value: 1, message: "מס' דירה חייב להיות חיובי" }
//                       })} />
//                       {errors.aptnumber && <span style={{ color: 'red' }}>{errors.aptnumber.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicBuildingNumber">
//                       <Form.Control type="number" placeholder="מספר בנין" style={centeredInputStyle}
//                       {...register("numofbuilding", {
//                         required: "שדה זה הינו שדה חובה",
//                         min: { value: 1, message: "מס' בנין חייב להיות חיובי" }
//                       })} />
//                       {errors.numofbuilding && <span style={{ color: 'red' }}>{errors.numofbuilding.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                   <Form.Group as={Col} controlId="formBasicCategoryCode" >
//                       <Form.Control as="select" style={centeredInputStyle}
//                       {...register("categoryCode", { required: "שדה זה הינו שדה חובה" })}>
//                         {helpCategory.map((category) => (
//                           <option key={category.code} value={category.code}>
//                             {category.type}
//                           </option>
//                         ))}
//                       </Form.Control>
//                       {errors.categoryCode && <span style={{ color: 'red' }}>{errors.categoryCode.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicZipCode">
//                       <Form.Control type="text" placeholder="מיקוד" style={centeredInputStyle}
//                       {...register("zipcode", {
//                         required: "שדה זה הינו שדה חובה",
//                         pattern: { value: /^[0-9]{5,7}$/, message: "מיקוד חייב להכיל בין 5 ל-7 ספרות" }
//                       })} />
//                       {errors.zipcode && <span style={{ color: 'red' }}>{errors.zipcode.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <br />
//                   <Button variant="outline-danger" type="submit" style={{ width: '8rem' }}>עדכן</Button>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </center>
//     </>
//   );
// };
// export default UpdateAssist;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
// import { centeredInputStyle } from '../style/Styles';
// import { useParams, useNavigate } from 'react-router-dom';
// const UpdateAssist = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [assist, setAssist] = useState({});
//   const [helpCategory, setHelpCategory] = useState([]);
//   const { register, handleSubmit, formState: { errors }, setValue, } = useForm();
//   useEffect(() => {
//     fetch('http://localhost:5089/api/categories')
//       .then((res) => res.json())
//       .then((data) => {
//         setHelpCategory(data);
//         setValue("categoryCode", data[0]?.code);
//       });
//   }, [setValue]);
//   useEffect(() => {
//     const fetchAssist = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5089/api/assists/${id}`);
//         const assistData = response.data;
//         setAssist(assistData);
//         // Set default form values
//         setValue("id", assistData.id);
//         setValue("firstName", assistData.firstName);
//         setValue("lastName", assistData.lastName);
//         setValue("numOfChildren", assistData.numOfChildren);
//         setValue("phoneNumber", assistData.phoneNumber); // Corrected key name
//         setValue("email", assistData.email);
//         setValue("categoryCode", assistData.categoryCode);
//         setValue("street", assistData.addressCodeNavigation.street);
//         setValue("city", assistData.addressCodeNavigation.city);
//         setValue("numOfBuilding", assistData.addressCodeNavigation.numOfBuilding); // Corrected key name
//         setValue("aptNumber", assistData.addressCodeNavigation.aptNumber); // Corrected key name
//         setValue("zipCode", assistData.addressCodeNavigation.zipCode); // Corrected key name
//       } catch (error) {
//         console.error('Error fetching data', error);
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAssist();
//   }, [id, setValue]);
//   const onSubmit = async (formData) => {
//     try {
//       const dataToSend = {
//         id: formData.id,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         numOfChildren: formData.numOfChildren,
//         phoneNumber: formData.phoneNumber, // Corrected key name
//         email: formData.email,
//         categoryCode: formData.categoryCode,
//         addressCodeNavigation: { // Corrected to match backend
//           street: formData.street,
//           city: formData.city,
//           numOfBuilding: formData.numOfBuilding, // Corrected key name
//           aptNumber: formData.aptNumber, // Corrected key name
//           zipCode: formData.zipCode // Corrected key name
//         }
//       };
//       const response = await axios.put(`http://localhost:5089/api/assists/${formData.id}`, dataToSend);
//       console.log('Data updated successfully', response.data);
//       navigate(`/assist/${formData.id}`);
//     } catch (error) {
//       console.error('Error updating data', error);
//       setError('Error updating data');
//     }
//   };
//   if (loading) return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
//   if (error) return <p>{error}</p>;
//   return (
//     <>
//     <h7> קולולולו</h7>
//       <center>
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               <div className="border border-danger p-4 rounded">
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicID">
//                       <Form.Control type="text" placeholder="מספר זהות" style={centeredInputStyle}
//                       {...register("id", {
//                         required: "שדה זה הינו שדה חובה",
//                         maxLength: { value: 9, message: "מספר זהות חייב להכיל עד 9 תווים" }
//                       })} readOnly />
//                       {errors.id && <span style={{ color: 'red' }}>{errors.id.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicLastName">
//                       <Form.Control type="text" placeholder="שם משפחה" style={centeredInputStyle}
//                       {...register("lastName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicFirstName">
//                       <Form.Control type="text" placeholder="שם פרטי" style={centeredInputStyle}
//                       {...register("firstName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicNumOfChildren">
//                       <Form.Control type="number" placeholder="מספר ילדים" style={centeredInputStyle}
//                       {...register("numOfChildren", {
//                         required: "שדה זה הינו שדה חובה",
//                         min: { value: 0, message: "מספר הילדים חייב להיות חיובי" }
//                       })} />
//                       {errors.numOfChildren && <span style={{ color: 'red' }}>{errors.numOfChildren.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicEmail">
//                       <Form.Control type="email" placeholder="דוא''ל" style={centeredInputStyle}
//                       {...register("email", {
//                         required: "שדה זה הינו שדה חובה",
//                         pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "דוא''ל אינו חוקי" }
//                       })} />
//                       {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicPhoneNumber">
//                       <Form.Control type="text" placeholder="מספר פלאפון" style={centeredInputStyle}
//                       {...register("phoneNumber", { // Corrected key name
//                         required: "שדה זה הינו שדה חובה",
//                         pattern: { value: /^[0-9]{10}$/, message: "מספר פלאפון חייב להכיל 10 ספרות" }
//                       })} />
//                       {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicStreet">
//                       <Form.Control type="text" placeholder="רחוב" style={centeredInputStyle}
//                       {...register("street", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.street && <span style={{ color: 'red' }}>{errors.street.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicCity">
//                       <Form.Control type="text" placeholder="עיר / יישוב" style={centeredInputStyle}
//                       {...register("city", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.city && <span style={{ color: 'red' }}>{errors.city.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicAptNumber">
//                       <Form.Control type="number" placeholder="מספר דירה" style={centeredInputStyle}
//                       {...register("aptNumber", { // Corrected key name
//                         required: "שדה זה הינו שדה חובה",
//                         min: { value: 1, message: "מס' דירה חייב להיות חיובי" }
//                       })} />
//                       {errors.aptNumber && <span style={{ color: 'red' }}>{errors.aptNumber.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicBuildingNumber">
//                       <Form.Control type="number" placeholder="מספר בנין" style={centeredInputStyle}
//                       {...register("numOfBuilding", { // Corrected key name
//                         required: "שדה זה הינו שדה חובה",
//                         min: { value: 1, message: "מס' בנין חייב להיות חיובי" }
//                       })} />
//                       {errors.numOfBuilding && <span style={{ color: 'red' }}>{errors.numOfBuilding.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicCategoryCode" >
//                       <Form.Control as="select" style={centeredInputStyle}
//                       {...register("categoryCode", { required: "שדה זה הינו שדה חובה" })}>
//                         {helpCategory.map((category) => (
//                           <option key={category.code} value={category.code}>
//                             {category.type}
//                           </option>
//                         ))}
//                       </Form.Control>
//                       {errors.categoryCode && <span style={{ color: 'red' }}>{errors.categoryCode.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicZipCode">
//                       <Form.Control type="text" placeholder="מיקוד" style={centeredInputStyle}
//                       {...register("zipCode", { // Corrected key name
//                         required: "שדה זה הינו שדה חובה",
//                         pattern: { value: /^[0-9]{5,7}$/, message: "מיקוד חייב להכיל בין 5 ל-7 ספרות" }
//                       })} />
//                       {errors.zipCode && <span style={{ color: 'red' }}>{errors.zipCode.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <br />
//                   <Button variant="outline-danger" type="submit" style={{ width: '8rem' }} onClick={() => navigate('/update_assist_succesfuly')}>עדכן</Button>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </center>
//     </>
//   );
// };
// export default UpdateAssist;
"use strict";