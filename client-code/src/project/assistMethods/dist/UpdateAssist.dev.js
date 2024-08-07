// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
// import { centeredInputStyle, width8rem, redColor } from '../style/Styles';
// import { useParams, useNavigate } from 'react-router-dom';
// import GreenNotificationCard from '../files/GreenNotificationCard';
// const UpdateAssist = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [assist, setAssist] = useState({});
//   const [helpCategory, setHelpCategory] = useState([]);
//   const [showNotification, setShowNotification] = useState(false);
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm();
//   const [updateSuccess, setUpdateSuccess] = useState(false);
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
//         setValue("id", assistData.id);
//         setValue("firstName", assistData.firstName);
//         setValue("lastName", assistData.lastName);
//         setValue("numOfChildren", assistData.numOfChildren);
//         setValue("phoneNumber", assistData.phoneNumber);
//         setValue("email", assistData.email);
//         setValue("categoryCode", assistData.categoryCode);
//         setValue("street", assistData.addressCodeNavigation.street);
//         setValue("city", assistData.addressCodeNavigation.city);
//         setValue("numOfBuilding", assistData.addressCodeNavigation.numOfBuilding);
//         setValue("aptNumber", assistData.addressCodeNavigation.aptNumber);
//         setValue("zipCode", assistData.addressCodeNavigation.zipCode);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data', error);
//         setError('Error fetching data');
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
//         phoneNumber: formData.phoneNumber,
//         email: formData.email,
//         categoryCode: formData.categoryCode,
//         addressCodeNavigation: {
//           street: formData.street,
//           city: formData.city,
//           numOfBuilding: formData.numOfBuilding,
//           aptNumber: formData.aptNumber,
//           zipCode: formData.zipCode
//         }
//       };
//       const response = await axios.put(`http://localhost:5089/api/assists/${formData.id}`, dataToSend);
//       console.log('Data updated successfully', response.data);
//       setUpdateSuccess(true); // Set update success to true
//     } catch (error) {
//       console.error('Error updating data', error);
//       setError('Error updating data');
//     }
//   };
//   const handleCloseNotification = () => {
//     setShowNotification(false);
//     navigate('/assist_details');
//   };
//   useEffect(() => {
//     if (updateSuccess) {
//       setShowNotification(true);
//     }
//   }, [updateSuccess]);
//   return (
//     <>
//       <center>
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               <div className="border border-danger p-4 rounded">
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Row className="mb-3">
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicLastName">
//                       <Form.Control type="text" placeholder="שם משפחה" style={centeredInputStyle}
//                         {...register("lastName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.lastName && <span style={redColor}>{errors.lastName.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicFirstName">
//                       <Form.Control type="text" placeholder="שם פרטי" style={centeredInputStyle}
//                         {...register("firstName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.firstName && <span style={redColor}>{errors.firstName.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicNumOfChildren">
//                       <Form.Control type="number" placeholder="מספר ילדים" style={centeredInputStyle}
//                         {...register("numOfChildren", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 0, message: "מספר הילדים חייב להיות חיובי" }
//                         })} />
//                       {errors.numOfChildren && <span style={redColor}>{errors.numOfChildren.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicEmail">
//                       <Form.Control type="email" placeholder="דוא''ל" style={centeredInputStyle}
//                         {...register("email", {
//                           required: "שדה זה הינו שדה חובה",
//                           pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "דוא''ל אינו חוקי" }
//                         })} />
//                       {errors.email && <span style={redColor}>{errors.email.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicPhoneNumber">
//                       <Form.Control type="text" placeholder="מספר פלאפון" style={centeredInputStyle}
//                         {...register("phoneNumber", {
//                           required: "שדה זה הינו שדה חובה",
//                           pattern: { value: /^[0-9]{10}$/, message: "מספר פלאפון חייב להכיל 10 ספרות" }
//                         })} />
//                       {errors.phoneNumber && <span style={redColor}>{errors.phoneNumber.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicStreet">
//                       <Form.Control type="text" placeholder="רחוב" style={centeredInputStyle}
//                         {...register("street", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.street && <span style={redColor}>{errors.street.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicCity">
//                       <Form.Control type="text" placeholder="עיר / יישוב" style={centeredInputStyle}
//                         {...register("city", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.city && <span style={redColor}>{errors.city.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicAptNumber">
//                       <Form.Control type="number" placeholder="מספר דירה" style={centeredInputStyle}
//                         {...register("aptNumber", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 1, message: "מס' דירה חייב להיות חיובי" }
//                         })} />
//                       {errors.aptNumber && <span style={redColor}>{errors.aptNumber.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicBuildingNumber">
//                       <Form.Control type="number" placeholder="מספר בנין" style={centeredInputStyle}
//                         {...register("numOfBuilding", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 1, message: "מס' בנין חייב להיות חיובי" }
//                         })} />
//                       {errors.numOfBuilding && <span style={redColor}>{errors.numOfBuilding.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicCategoryCode" >
//                       <Form.Control as="select" style={centeredInputStyle}
//                         {...register("categoryCode", { required: "שדה זה הינו שדה חובה" })}>
//                         {helpCategory.map((category) => (
//                           <option key={category.code} value={category.code}>
//                             {category.type}
//                           </option>
//                         ))}
//                       </Form.Control>
//                       {errors.categoryCode && <span style={redColor}>{errors.categoryCode.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicZipCode">
//                       <Form.Control type="text" placeholder="מיקוד" style={centeredInputStyle}
//                         {...register("zipCode", {
//                           required: "שדה זה הינו שדה חובה",
//                           pattern: { value: /^[0-9]{5,7}$/, message: "מיקוד חייב להכיל בין 5 ל-7 ספרות" }
//                         })} />
//                       {errors.zipCode && <span style={redColor}>{errors.zipCode.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <br />
//                   <Button variant="outline-danger" type="submit" style={width8rem}>עדכן</Button>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </center>
//       {showNotification && <GreenNotificationCard text="פרטייך התעדכנו בהצלחה" onClose={handleCloseNotification} />}
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };
// export default UpdateAssist;
"use strict";