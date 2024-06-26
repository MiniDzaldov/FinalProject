// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// const CreateAssist = () => {
//   const [helpCategory, setHelpCategory] = useState([]);
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
//         numofchildren: formData.numOfChildren,
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
//       console.log(dataToSend);
//       const response = await axios.post('http://localhost:5089/api/assists', dataToSend);
//       console.log('Data submitted successfully', response.data);
//     } catch (error) {
//       console.error('Error submitting data', error);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         name="id"
//         placeholder="מספר זהות"
//         {...register("id", {
//           required: "שדה זה הינו שדה חובה",
//           maxLength: { value: 9, message: "מספר זהות חייב להכיל עד 9 תווים" }
//         })}
//       />
//       {errors.id && <span style={{ color: 'red' }}>{errors.id.message}</span>}
//       <br />
//       <input
//         type="text"
//         name="firstName"
//         placeholder="שם פרטי"
//         {...register("firstName", { required: "שדה זה הינו שדה חובה" })}
//       />
//       {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
//       <br />
//       <input
//         type="text"
//         name="lastName"
//         placeholder="שם משפחה"
//         {...register("lastName", { required: "שדה זה הינו שדה חובה" })}
//       />
//       {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
//       <br />
//       <input
//         type="number"
//         name="age"
//         placeholder="גיל"
//         {...register("age", {
//           required: "שדה זה הינו שדה חובה",
//           min: { value: 0, message: "הגיל חייב להיות חיובי" }
//         })}
//       />
//       {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
//       <br />
//       <input
//         type="number"
//         name="numOfChildren"
//         placeholder="מס' ילדים"
//         {...register("numOfChildren", {
//           required: "שדה זה הינו שדה חובה",
//           min: { value: 0, message: "מספר הילדים חייב להיות חיובי" }
//         })}
//       />
//       {errors.numOfChildren && <span style={{ color: 'red' }}>{errors.numOfChildren.message}</span>}
//       <br />
//       <input
//         type="text"
//         name="phonenumber"
//         placeholder="מס' פלאפון"
//         {...register("phonenumber", {
//           required: "שדה זה הינו שדה חובה",
//           pattern: { value: /^[0-9]{10}$/, message: "מספר פלאפון חייב להכיל 10 ספרות" }
//         })}
//       />
//       {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber.message}</span>}
//       <br />
//       <input
//         type="email"
//         name="email"
//         placeholder="דוא''ל"
//         {...register("email", {
//           required: "שדה זה הינו שדה חובה",
//           pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "דוא''ל אינו חוקי" }
//         })}
//       />
//       {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
//       <br />
//       <input
//         type="text"
//         name="street"
//         placeholder="רחוב"
//         {...register("street", { required: "שדה זה הינו שדה חובה" })}
//       />
//       {errors.street && <span style={{ color: 'red' }}>{errors.street.message}</span>}
//       <br />
//       <input
//         type="text"
//         name="city"
//         placeholder="עיר"
//         {...register("city", { required: "שדה זה הינו שדה חובה" })}
//       />
//       {errors.city && <span style={{ color: 'red' }}>{errors.city.message}</span>}
//       <br />
//       <input
//         type="number"
//         name="numofbuilding"
//         placeholder="מס' בנין"
//         {...register("numofbuilding", {
//           required: "שדה זה הינו שדה חובה",
//           min: { value: 1, message: "מס' בנין חייב להיות חיובי" }
//         })}
//       />
//       {errors.numofbuilding && <span style={{ color: 'red' }}>{errors.numofbuilding.message}</span>}
//       <br />
//       <input
//         type="number"
//         name="aptnumber"
//         placeholder="מס' דירה"
//         {...register("aptnumber", {
//           required: "שדה זה הינו שדה חובה",
//           min: { value: 1, message: "מס' דירה חייב להיות חיובי" }
//         })}
//       />
//       {errors.aptnumber && <span style={{ color: 'red' }}>{errors.aptnumber.message}</span>}
//       <br />
//       <input
//         type="text"
//         name="zipcode"
//         placeholder="מיקוד"
//         {...register("zipcode", {
//           required: "שדה זה הינו שדה חובה",
//           pattern: { value: /^[0-9]{5,7}$/, message: "מיקוד חייב להכיל בין 5 ל-7 ספרות" }
//         })}
//       />
//       {errors.zipcode && <span style={{ color: 'red' }}>{errors.zipcode.message}</span>}
//       <br />
//       <select
//         name="categoryCode"
//         {...register("categoryCode", { required: "שדה זה הינו שדה חובה" })}
//       >
//         {helpCategory.map((category) => (
//           <option key={category.code} value={category.code}>{category.type}</option>
//         ))}
//       </select>
//       {errors.categoryCode && <span style={{ color: 'red' }}>{errors.categoryCode.message}</span>}
//       <br />
//       <button type="submit">שליחה</button>
//     </form>
//   );
// };
// export default CreateAssist;
"use strict";