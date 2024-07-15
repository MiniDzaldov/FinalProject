// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { centeredInputStyle} from '../style/Styles';
// import { useNavigate } from 'react-router-dom';
// import NotificationCard from '../NotificationCard'
// const CreateAssist = () => {
//   const [helpCategory, setHelpCategory] = useState([]);
//   const [showNotification, setShowNotification] = useState(false);
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm();
//   useEffect(() => {
//     fetch('http://localhost:5089/api/categories')
//       .then((res) => res.json())
//       .then((data) => {
//         setHelpCategory(data);
//         setValue("categoryCode", data[0]?.code);
//       });
//   }, [setValue]);
//   const onSubmit = async (formData) => {
//     try {
//       const dataToSend = {
//         id: formData.id,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         age: formData.age,
//         numOfChildren: formData.numOfChildren,
//         phonenumber: formData.phonenumber,
//         email: formData.email,
//         categoryCode: formData.categoryCode,
//         AddressCodeNavigation: {
//           street: formData.street,
//           city: formData.city,
//           numofbuilding: formData.numofbuilding,
//           aptnumber: formData.aptnumber,
//           zipcode: formData.zipcode
//         },
//       };
//       const response = await axios.post('http://localhost:5089/api/assists', dataToSend);
//       console.log('Data submitted successfully', response.data);
//       setShowNotification(true); 
//     } catch (error) {
//       console.error('Error submitting data', error);
//     }
//   };
//   return (
//     <>
//     <br/>
//       <center>
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               <div className="border border-danger p-4 rounded">
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicID">
//                       <Form.Control type="text" placeholder="מספר זהות" style={centeredInputStyle}
//                         {...register("id", {
//                           required: "שדה זה הינו שדה חובה",
//                           maxLength: { value: 9, message: "מספר זהות חייב להכיל עד 9 תווים" }
//                         })} />
//                       {errors.id && <span style={{ color: 'red' }}>{errors.id.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   {/* Rest of your form fields */}
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicLastName" >
//                       <Form.Control type="text" placeholder="שם משפחה" style={centeredInputStyle}
//                         {...register("lastName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicFirstName">
//                       <Form.Control type="text" placeholder="שם פרטי" style={centeredInputStyle}
//                         {...register("firstName", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicNumOfChildren">
//                       <Form.Control type="number" placeholder="מספר ילדים" style={centeredInputStyle}
//                         {...register("numOfChildren", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 0, message: "מספר הילדים חייב להיות חיובי" }
//                         })} />
//                       {errors.numOfChildren && <span style={{ color: 'red' }}>{errors.numOfChildren.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicAge">
//                       <Form.Control type="number" placeholder="גיל" style={centeredInputStyle}
//                         {...register("age", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 0, message: "הגיל חייב להיות חיובי" }
//                         })} />
//                       {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicEmail">
//                       <Form.Control type="email" placeholder="דוא''ל" style={centeredInputStyle}
//                         {...register("email", {
//                           required: "שדה זה הינו שדה חובה",
//                           pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "דוא''ל אינו חוקי" }
//                         })} />
//                       {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicPhoneNumber">
//                       <Form.Control type="text" placeholder="מספר פלאפון" style={centeredInputStyle}
//                         {...register("phonenumber", {
//                           required: "שדה זה הינו שדה חובה",
//                           pattern: { value: /^[0-9]{10}$/, message: "מספר פלאפון חייב להכיל 10 ספרות" }
//                         })} />
//                       {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicStreet">
//                       <Form.Control type="text" placeholder="רחוב" style={centeredInputStyle}
//                         {...register("street", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.street && <span style={{ color: 'red' }}>{errors.street.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicCity">
//                       <Form.Control type="text" placeholder="עיר / יישוב" style={centeredInputStyle}
//                         {...register("city", { required: "שדה זה הינו שדה חובה" })} />
//                       {errors.city && <span style={{ color: 'red' }}>{errors.city.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formBasicAptNumber">
//                       <Form.Control type="number" placeholder="מספר דירה" style={centeredInputStyle}
//                         {...register("aptnumber", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 1, message: "מס' דירה חייב להיות חיובי" }
//                         })} />
//                       {errors.aptnumber && <span style={{ color: 'red' }}>{errors.aptnumber.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicBuildingNumber">
//                       <Form.Control type="number" placeholder="מספר בנין" style={centeredInputStyle}
//                         {...register("numofbuilding", {
//                           required: "שדה זה הינו שדה חובה",
//                           min: { value: 1, message: "מס' בנין חייב להיות חיובי" }
//                         })} />
//                       {errors.numofbuilding && <span style={{ color: 'red' }}>{errors.numofbuilding.message}</span>}
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
//                       {errors.categoryCode && <span style={{ color: 'red' }}>{errors.categoryCode.message}</span>}
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formBasicZipCode">
//                       <Form.Control type="text" placeholder="מיקוד" style={centeredInputStyle}
//                         {...register("zipcode", {
//                           required: "שדה זה הינו שדה חובה",
//                           pattern: { value: /^[0-9]{5,7}$/, message: "מיקוד חייב להכיל בין 5 ל-7 ספרות" }
//                         })} />
//                       {errors.zipcode && <span style={{ color: 'red' }}>{errors.zipcode.message}</span>}
//                     </Form.Group>
//                   </Row>
//                   <br />
//                   <Button variant="outline-danger" type="submit" style={{ width: '8rem' }} >שליחת הטופס</Button>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </center>
//        {showNotification && <NotificationCard text="התווספת בהצלחה למאגר"  onClose={() => setShowNotification(false)}/>}
//     </>
//   );
// }
// export default CreateAssist;
"use strict";