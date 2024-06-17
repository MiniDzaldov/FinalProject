// import React, { useState } from 'react';
// import axios from 'axios';
// import BasicForm from '../form/BasicForm'

// const CreateAssist = ({ fetchAssists }) => {
//   const [newAssist, setNewAssist] = useState({
//     FirstName: '',
//     LastName: '',
//     NumOfChildren: 0,
//     PhoneNumber: '',
//     Email: '',
//     AddressCode: 0,
//     CategoryCode: 0
//   });

//   const createAssist = async () => {
//     try {
//       await axios.post('http://localhost:5089/api/assists', newAssist);
//       console.log(newAssist);
//       fetchAssists();
//     } catch (error) {
//       console.error('Error creating assist:', error);
//     }
//   };

//   return (
//     <div>
//       <h6>Create Assist:</h6>
//       <BasicForm></BasicForm>
//       <div>
//       {/* <input
//         type="text"
//         placeholder="First Name"
//         value={newAssist.FirstName}
//         onChange={(e) => setNewAssist({ ...newAssist, FirstName: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={newAssist.LastName}
//         onChange={(e) => setNewAssist({ ...newAssist, LastName: e.target.value })}
//       /> */}
//         <button onClick={createAssist}>Create Assist</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAssist;


// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// export default function CreateAssist() {
//     // const navigate = useNavigate();
//     // const userExist = useRef();
//     const [helpCategory, setHelpCategory] = useState([]);

//     const [newAssis, setNewAssist] = useState({
//         id: "",
//         firstname: "",
//         lastname: "",
//         age: "",
//         numofchildren: "",
//         phonenumber: "",
//         email: "",
//         addressCode:"",
//         categoryCode:"",
//         addressCodeNaigation:{
//           city: "",
//         street: "",
//         numofbuilding: "",
//         aptnumber: "",
//         zipcode: ""
//         }
//     });

//     useEffect(() => {
//         fetch('http://localhost:5089/api/categories')
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setHelpCategory(data);
//             });
//     }, []);

//     const { register, handleSubmit, formState: { errors } } = useForm();

// const onSuccess = (data) => {navigate(`/HomePage/${data.userName}/${data.password}`)}
// const onSuccess = (data) => {
//   setNewAssist({
//         id: data.id,
//         firstname: data.firstname.toString(),
//         lastname: data.lastname,
//         age: data.age,
//         numofchildren: data.numofchildren,
//         phonenumber: data.phonenumber,
//         email: data.email,
//         addressCode: 0,
//         categoryCode: 1 /*helpCategory[data.categoryCode[helpCategory[data.categoryCode]]]*/,
//         addressCodeNaigation: {
//         city: data.city,
//         street: data.street,
//         numofbuilding: data.numofbuilding,
//         aptnumber: data.aptnumber,
//         zipcode: data.zipcode
//     }});

//     const options = {
//         headers: { 'Content-Type': 'application/json' }
//     };

//     axios.post(`http://localhost:5089/api/Assists`, JSON.stringify(newAssis), options)
//         .then((response) => {
//             if (response.status === 200) {
//                 console.log("Assistant add");
//                 console.log(response);
// Perform actions after successful signup, e.g., redirect to login page or log in the user
//     }
// })
// .catch((error) => {
//     if (error.response) {
//         if (error.response.status === 409) {
//             console.log("ID already exists. Please log in.");
//         } else if (error.response.status === 400) {
//             console.log("Bad Request: ", error.response.data);
//         } else if (error.response.status === 500) {
//             console.log("Internal Server Error: ", error.response.data);
//         } else {
//             console.log("Error: ", error.response.data);
//         }
//     } else if (error.request) {
//         console.log("No response received: ", error.request);
//     } else {
//         console.log("Error: ", error.message);
//     }
// })
// .finally(() => {
// Actions to perform regardless of success or failure
//             });
//     }

//     const onFailed = (data, error) => {
//       setNewAssist({
//         id: data.id,
//         firstname: data.firstname,
//         lastname: data.lastname,
//         age: data.age,
//         numofchildren: data.numofchildren,
//         phonenumber: data.phonenumber,
//         email: data.email,
//         addressCode: 0,
//         categoryCode: 1,
//         addressCodeNaigation: {
//         city: data.city,
//         street: data.street,
//         numofbuilding: data.numofbuilding,
//         aptnumber: data.aptnumber,
//         zipcode: data.zipcode
//     }});

//         console.log("Form submission failed:", error);
//         console.log("Form errors:", errors);
//     }

//     const requirements = {
//         id: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'ID must be a valid number.',
//             },
//         },
//         firstname: {
//             required: true,
//             pattern: {
//                 value: /^[a-zA-Zא-ת' -]+$/,
//                 message: 'First name must contain only letters.',
//             },
//         },
//         lastname: {
//             required: true,
//             pattern: {
//                 value: /^[a-zA-Zא-ת' -]+$/,
//                 message: 'Last name must contain only letters.',
//             },
//         },
//         age: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'Age must be a valid number.',
//             },
//         },
//         numofchildren: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'Number of children must be a valid number.',
//             },
//         },
//         phonenumber: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: 'Phone number must be a valid 10-digit number.',
//             },
//         },
//         email: {
//             required: true,
//             pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: 'Please enter a valid email address.',
//             },
//         },
//         city: {
//             required: true,
//             pattern: {
//                 value: /^[a-zA-Zא-ת' -]+$/,
//                 message: 'City must contain only letters.',
//             },
//         },
//         street: {
//             required: true,
//             pattern: {
//                 value: /^[a-zA-Zא-ת' -]+$/,
//                 message: 'Street must contain only letters.',
//             },
//         },
//         numofbuilding: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'Number of building must be a valid number.',
//             },
//         },
//         aptnumber: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'Apartment number must be a valid number.',
//             },
//         },
//         zipcode: {
//             required: true,
//             pattern: {
//                 value: /^[0-9]{6,7}$/,
//                 message: 'Zip code must be a valid 5 or 6-digit number.',
//             },
//         },
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSuccess, onFailed)}>

//                 <input name="id" placeholder="מספר זהות" {...register("id", requirements.id)} />
//                 {errors.id && <small style={{ color: "red" }}>{errors.id.message}</small>}
//                 <br />
//                 <input name="firstname" placeholder="שם פרטי" {...register("firstname", requirements.firstname)} />
//                 {errors.firstname && <small style={{ color: "red" }}>{errors.firstname.message}</small>}
//                 <br />
//                 <input name="lastname" placeholder="שם משפחה" {...register("lastname", requirements.lastname)} />
//                 {errors.lastname && <small style={{ color: "red" }}>{errors.lastname.message}</small>}
//                 <br />
//                 <input name="age" placeholder="גיל" {...register("age", requirements.age)} />
//                 {errors.age && <small style={{ color: "red" }}>{errors.age.message}</small>}
//                 <br />
//                 <input name="numofchildren" placeholder="מספר ילדים" {...register("numofchildren", requirements.numofchildren)} />
//                 {errors.numofchildren && <small style={{ color: "red" }}>{errors.numofchildren.message}</small>}
//                 <br />
//                 <input name="phonenumber" placeholder="מספר פלאפון" {...register("phonenumber", requirements.phonenumber)} />
//                 {errors.phonenumber && <small style={{ color: "red" }}>{errors.phonenumber.message}</small>}
//                 <br />
//                 <input name="email" placeholder="כתובת דואל" {...register("email", requirements.email)} />
//                 {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
//                 <br />
//                 <input name="city" placeholder="עיר" {...register("city", requirements.city)} />
//                 {errors.city && <small style={{ color: "red" }}>{errors.city.message}</small>}
//                 <br />
//                 <input name="street" placeholder="רחוב" {...register("street", requirements.street)} />
//                 {errors.street && <small style={{ color: "red" }}>{errors.street.message}</small>}
//                 <br />
//                 <input name="numofbuilding" placeholder="מספר בנין" {...register("numofbuilding", requirements.numofbuilding)} />
//                 {errors.numofbuilding && <small style={{ color: "red" }}>{errors.numofbuilding.message}</small>}
//                 <br />
//                 <input name="aptnumber" placeholder="מספר דירה" {...register("aptnumber", requirements.aptnumber)} />
//                 {errors.aptnumber && <small style={{ color: "red" }}>{errors.aptnumber.message}</small>}
//                 <br />
//                 <input name="zipcode" placeholder="מיקוד" {...register("zipcode", requirements.zipcode)} />
//                 {errors.zipcode && <small style={{ color: "red" }}>{errors.zipcode.message}</small>}


//                 <select>
//                     {helpCategory.map((helpc) => (
//                         <option value="someOption">{helpc.type}</option>))}
//                 </select>



//                 <center>
//                     <button type="submit">שליחת הטופס</button>
//                 </center>
//             </form>
//         </>
//     )
// };

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// export default function CreateAssist({ fetchAssists }) {
//   const [helpCategory, setHelpCategory] = useState([]);
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm();
//   const [newAssist, setNewAssist] = useState({
//     id: "",
//     firstname: "",
//     lastname: "",
//     age: "",
//     numofchildren: "",
//     phonenumber: "",
//     email: "",
//     addressCode: 4,
//     categoryCode: "",
//     addressCodeNaigation: {
//       city: "",
//       street: "",
//       numofbuilding: "",
//       aptnumber: "",
//       zipcode: ""
//     }
//   });

//   useEffect(() => {
//     fetch('http://localhost:5089/api/categories')
//       .then((res) => res.json())
//       .then((data) => {
//         setHelpCategory(data);
//         setValue("categoryCode", data[0]?.code); // Default to first category
//       });
//   }, [setValue]);



//   const onSubmit = async (data) => {
//     const assistData = {
//       id: data.id,
//       firstname: data.firstname,
//       lastname: data.lastname,
//       age: data.age,
//       numofchildren: data.numofchildren,
//       phonenumber: data.phonenumber,
//       email: data.email,
//       address: {
//         city: data.city,
//         street: data.street,
//         numofbuilding: data.numofbuilding,
//         aptnumber: data.aptnumber,
//         zipcode: data.zipcode
//       },
//       categoryCode: data.categoryCode
//     };


//     try {
//       const response = await axios.post('http://localhost:5089/api/assists', assistData, {
//         headers: { 'Content-Type': 'application/json' }
//       });
//       if (response.status === 200) {
//         console.log("Assistant added");
//         fetchAssists(); // Refresh the list of assists
//       }
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 409) {
//           console.log("ID already exists. Please log in.");
//         } else if (error.response.status === 400) {
//           console.log("Bad Request: ", error.response.data);
//         } else if (error.response.status === 500) {
//           console.log("Internal Server Error: ", error.response.data);
//         } else {
//           console.log("Error: ", error.response.data);
//         }
//       } else if (error.request) {
//         console.log("No response received: ", error.request);
//       } else {
//         console.log("Error: ", error.message);
//       }
//     }
//   };

//   const requirements = {
//     id: {
//       required: true,
//       pattern: {
//         value: /^[0-9]+$/,
//         message: 'ID must be a valid number.',
//       },
//     },
//     firstname: {
//       required: true,
//       pattern: {
//         value: /^[a-zA-Zא-ת' -]+$/,
//         message: 'First name must contain only letters.',
//       },
//     },
//     lastname: {
//       required: true,
//       pattern: {
//         value: /^[a-zA-Zא-ת' -]+$/,
//         message: 'Last name must contain only letters.',
//       },
//     },
//     age: {
//       required: true,
//       pattern: {
//         value: /^[0-9]+$/,
//         message: 'Age must be a valid number.',
//       },
//     },
//     numofchildren: {
//       required: true,
//       pattern: {
//         value: /^[0-9]+$/,
//         message: 'Number of children must be a valid number.',
//       },
//     },
//     phonenumber: {
//       required: true,
//       pattern: {
//         value: /^[0-9]{10}$/,
//         message: 'Phone number must be a valid 10-digit number.',
//       },
//     },
//     email: {
//       required: true,
//       pattern: {
//         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//         message: 'Please enter a valid email address.',
//       },
//     },
//     city: {
//       required: true,
//       pattern: {
//         value: /^[a-zA-Zא-ת' -]+$/,
//         message: 'City must contain only letters.',
//       },
//     },
//     street: {
//       required: true,
//       pattern: {
//         value: /^[a-zA-Zא-ת' -]+$/,
//         message: 'Street must contain only letters.',
//       },
//     },
//     numofbuilding: {
//       required: true,
//       pattern: {
//         value: /^[0-9]+$/,
//         message: 'Number of building must be a valid number.',
//       },
//     },
//     aptnumber: {
//       required: true,
//       pattern: {
//         value: /^[0-9]+$/,
//         message: 'Apartment number must be a valid number.',
//       },
//     },
//     zipcode: {
//       required: true,
//       pattern: {
//         value: /^[0-9]{5,7}$/,
//         message: 'Zip code must be a valid 5 or 6-digit number.',
//       },
//     },
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input name="id" placeholder="מספר זהות" {...register("id", requirements.id)} />
//         {errors.id && <small style={{ color: "red" }}>{errors.id.message}</small>}
//         <br />
//         <input name="firstname" placeholder="שם פרטי" {...register("firstname", requirements.firstname)} />
//         {errors.firstname && <small style={{ color: "red" }}>{errors.firstname.message}</small>}
//         <br />
//         <input name="lastname" placeholder="שם משפחה" {...register("lastname", requirements.lastname)} />
//         {errors.lastname && <small style={{ color: "red" }}>{errors.lastname.message}</small>}
//         <br />
//         <input name="age" placeholder="גיל" {...register("age", requirements.age)} />
//         {errors.age && <small style={{ color: "red" }}>{errors.age.message}</small>}
//         <br />
//         <input name="numofchildren" placeholder="מספר ילדים" {...register("numofchildren", requirements.numofchildren)} />
//         {errors.numofchildren && <small style={{ color: "red" }}>{errors.numofchildren.message}</small>}
//         <br />
//         <input name="phonenumber" placeholder="מספר פלאפון" {...register("phonenumber", requirements.phonenumber)} />
//         {errors.phonenumber && <small style={{ color: "red" }}>{errors.phonenumber.message}</small>}
//         <br />
//         <input name="email" placeholder="כתובת דואל" {...register("email", requirements.email)} />
//         {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
//         <br />
//         <input name="city" placeholder="עיר" {...register("city", requirements.city)} />
//         {errors.city && <small style={{ color: "red" }}>{errors.city.message}</small>}
//         <br />
//         <input name="street" placeholder="רחוב" {...register("street", requirements.street)} />
//         {errors.street && <small style={{ color: "red" }}>{errors.street.message}</small>}
//         <br />
//         <input name="numofbuilding" placeholder="מספר בנין" {...register("numofbuilding", requirements.numofbuilding)} />
//         {errors.numofbuilding && <small style={{ color: "red" }}>{errors.numofbuilding.message}</small>}
//         <br />
//         <input name="aptnumber" placeholder="מספר דירה" {...register("aptnumber", requirements.aptnumber)} />
//         {errors.aptnumber && <small style={{ color: "red" }}>{errors.aptnumber.message}</small>}
//         <br />
//         <input name="zipcode" placeholder="מיקוד" {...register("zipcode", requirements.zipcode)} />
//         {errors.zipcode && <small style={{ color: "red" }}>{errors.zipcode.message}</small>}
//         <br />
//         <select name="categoryCode" {...register("categoryCode")}>
//           {helpCategory.map((category) => (
//             <option key={category.code} value={category.code}>{category.type}</option>
//           ))}
//         </select>
//         <br />
//         <center>
//           <button type="submit">שליחת הטופס</button>
//         </center>
//       </form>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function CreateAssist({ fetchAssists }) {
  const [helpCategory, setHelpCategory] = useState([]);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    fetch('http://localhost:5089/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setHelpCategory(data);
        setValue("categoryCode", data[0]?.code); // Default to first category
      });
  }, [setValue]);

  const onSubmit = async (data) => {
    const assistData = {
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      // age: data.age,
      numofchildren: data.numofchildren,
      phonenumber: data.phonenumber,
      email: data.email,
      categoryCode: data.categoryCode,
      address: {
        city: data.city,
        street: data.street,
        numofbuilding: data.numofbuilding,
        aptnumber: data.aptnumber,
        zipcode: data.zipcode
      }
    };

    try {
      const response = await axios.post('http://localhost:5089/api/assists', assistData, {

        headers: { 'Content-Type': 'application/json' }
      });
      console.log(assistData)
      if (response.status === 200) {
        console.log("Assistant added");
        fetchAssists(); // Refresh the list of assists
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          console.log("ID already exists. Please log in.");
        } else if (error.response.status === 400) {
          console.log("Bad Request: ", error.response.data);
        } else if (error.response.status === 500) {
          console.log("Internal Server Error: ", error.response.data);
        } else {
          console.log("Error: ", error.response.data);
        }
      } else if (error.request) {
        console.log("No response received: ", error.request);
      } else {
        console.log("Error: ", error.message);
      }
    }
  };

  const requirements = {
    id: {
      required: true,
      pattern: {
        value: /^[0-9]+$/,
        message: 'ID must be a valid number.',
      },
    },
    firstname: {
      required: true,
      pattern: {
        value: /^[a-zA-Zא-ת' -]+$/,
        message: 'First name must contain only letters.',
      },
    },
    lastname: {
      required: true,
      pattern: {
        value: /^[a-zA-Zא-ת' -]+$/,
        message: 'Last name must contain only letters.',
      },
    // },
    // age: {
    //   required: true,
    //   pattern: {
    //     value: /^[0-9]+$/,
    //     message: 'Age must be a valid number.',
    //   },
    },
    numofchildren: {
      required: true,
      pattern: {
        value: /^[0-9]+$/,
        message: 'Number of children must be a valid number.',
      },
    },
    phonenumber: {
      required: true,
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Phone number must be a valid 10-digit number.',
      },
    },
    email: {
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address.',
      },
    },
    city: {
      required: true,
      pattern: {
        value: /^[a-zA-Zא-ת' -]+$/,
        message: 'City must contain only letters.',
      },
    },
    street: {
      required: true,
      pattern: {
        value: /^[a-zA-Zא-ת' -]+$/,
        message: 'Street must contain only letters.',
      },
    },
    numofbuilding: {
      required: true,
      pattern: {
        value: /^[0-9]+$/,
        message: 'Number of building must be a valid number.',
      },
    },
    aptnumber: {
      required: true,
      pattern: {
        value: /^[0-9]+$/,
        message: 'Apartment number must be a valid number.',
      },
    },
    zipcode: {
      required: true,
      pattern: {
        value: /^[0-9]{5,7}$/,
        message: 'Zip code must be a valid 5 or 6-digit number.',
      },
    },
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="id" placeholder="מספר זהות" {...register("id", requirements.id)} />
        {errors.id && <small style={{ color: "red" }}>{errors.id.message}</small>}
        <br />
        <input name="firstname" placeholder="שם פרטי" {...register("firstname", requirements.firstname)} />
        {errors.firstname && <small style={{ color: "red" }}>{errors.firstname.message}</small>}
        <br />
        <input name="lastname" placeholder="שם משפחה" {...register("lastname", requirements.lastname)} />
        {errors.lastname && <small style={{ color: "red" }}>{errors.lastname.message}</small>}
        <br />
        {/* <input name="age" placeholder="גיל" {...register("age", requirements.age)} />
        {errors.age && <small style={{ color: "red" }}>{errors.age.message}</small>}
        <br /> */}
        <input name="numofchildren" placeholder="מספר ילדים" {...register("numofchildren", requirements.numofchildren)} />
        {errors.numofchildren && <small style={{ color: "red" }}>{errors.numofchildren.message}</small>}
        <br />
        <input name="phonenumber" placeholder="מספר פלאפון" {...register("phonenumber", requirements.phonenumber)} />
        {errors.phonenumber && <small style={{ color: "red" }}>{errors.phonenumber.message}</small>}
        <br />
        <input name="email" placeholder="כתובת דואל" {...register("email", requirements.email)} />
        {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
        <br />
        <input name="city" placeholder="עיר" {...register("city", requirements.city)} />
        {errors.city && <small style={{ color: "red" }}>{errors.city.message}</small>}
        <br />
        <input name="street" placeholder="רחוב" {...register("street", requirements.street)} />
        {errors.street && <small style={{ color: "red" }}>{errors.street.message}</small>}
        <br />
        <input name="numofbuilding" placeholder="מספר בנין" {...register("numofbuilding", requirements.numofbuilding)} />
        {errors.numofbuilding && <small style={{ color: "red" }}>{errors.numofbuilding.message}</small>}
        <br />
        <input name="aptnumber" placeholder="מספר דירה" {...register("aptnumber", requirements.aptnumber)} />
        {errors.aptnumber && <small style={{ color: "red" }}>{errors.aptnumber.message}</small>}
        <br />
        <input name="zipcode" placeholder="מיקוד" {...register("zipcode", requirements.zipcode)} />
        {errors.zipcode && <small style={{ color: "red" }}>{errors.zipcode.message}</small>}
        <br />
        <select name="categoryCode" {...register("categoryCode")}>
          {helpCategory.map((category) => (
            <option key={category.code} value={category.code}>{category.type}</option>
          ))}
        </select>
        <br />
        <center>
          <button type="submit">שליחת הטופס</button>
        </center>
      </form>
    </>
  );
}
