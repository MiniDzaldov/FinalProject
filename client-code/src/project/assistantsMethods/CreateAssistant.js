import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {redColor} from '../style/Styles'
export default function CreateAssistant() {
    // const navigate = useNavigate();
    const userExist = useRef();
    const [helpCategory, setHelpCategory] = useState([]);
    const [newAssistant, setNewAssistant] = useState({
        id: null,
        firstname: null,
        lastname: null,
        age: null,
        numofchildren: null,
        phonenumber: null,
        email: null,
        city: null,
        street: null,
        numofbuilding: null,
        aptnumber: null,
        zipcode: null
    });
    useEffect(() => {
        fetch('http://localhost:5089/api/categories')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setHelpCategory(data);
            });
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSuccess = (data) => {navigate(`/HomePage/${data.userName}/${data.password}`)}
    const onSuccess = (data) => {
        setNewAssistant({
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            age: data.age,
            numofchildren: data.numofchildren,
            phonenumber: data.phonenumber,
            email: data.email,
            city: data.city,
            street: data.street,
            numofbuilding: data.numofbuilding,
            aptnumber: data.aptnumber,
            zipcode: data.zipcode
        });

        const options = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios.post(`http://localhost:5089/api/Assistants`, JSON.stringify(newAssistant), options)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Assistant signed up");
                    console.log(response);
                    // Perform actions after successful signup, e.g., redirect to login page or log in the user
                }
            })
            .catch((error) => {
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
            })
            .finally(() => {
                // Actions to perform regardless of success or failure
            });
    }

    const onFailed = (error) => {
        console.log("Form submission failed:", error);
        console.log("Form errors:", errors);
    }

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
        },
        age: {
            required: true,
            pattern: {
                value: /^[0-9]+$/,
                message: 'Age must be a valid number.',
            },
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
                value: /^[0-9]{6,7}$/,
                message: 'Zip code must be a valid 5 or 6-digit number.',
            },
        },
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSuccess, onFailed)}>
                <input name="id" placeholder="מספר זהות" {...register("id", requirements.id)} />
                {errors.id && <small style={redColor}>{errors.id.message}</small>}
                <br />
                <input name="firstname" placeholder="שם פרטי" {...register("firstname", requirements.firstname)} />
                {errors.firstname && <small style={redColor}>{errors.firstname.message}</small>}
                <br />
                <input name="lastname" placeholder="שם משפחה" {...register("lastname", requirements.lastname)} />
                {errors.lastname && <small style={redColor}>{errors.lastname.message}</small>}
                <br />
                <input name="age" placeholder="גיל" {...register("age", requirements.age)} />
                {errors.age && <small style={redColor}>{errors.age.message}</small>}
                <br />
                <input name="numofchildren" placeholder="מספר ילדים" {...register("numofchildren", requirements.numofchildren)} />
                {errors.numofchildren && <small style={redColor}>{errors.numofchildren.message}</small>}
                <br />
                <input name="phonenumber" placeholder="מספר פלאפון" {...register("phonenumber", requirements.phonenumber)} />
                {errors.phonenumber && <small style={redColor}>{errors.phonenumber.message}</small>}
                <br />
                <input name="email" placeholder="כתובת דואל" {...register("email", requirements.email)} />
                {errors.email && <small style={redColor}>{errors.email.message}</small>}
                <br />
                <input name="city" placeholder="עיר" {...register("city", requirements.city)} />
                {errors.city && <small style={redColor}>{errors.city.message}</small>}
                <br />
                <input name="street" placeholder="רחוב" {...register("street", requirements.street)} />
                {errors.street && <small style={redColor}>{errors.street.message}</small>}
                <br />
                <input name="numofbuilding" placeholder="מספר בנין" {...register("numofbuilding", requirements.numofbuilding)} />
                {errors.numofbuilding && <small style={redColor}>{errors.numofbuilding.message}</small>}
                <br />
                <input name="aptnumber" placeholder="מספר דירה" {...register("aptnumber", requirements.aptnumber)} />
                {errors.aptnumber && <small style={redColor}>{errors.aptnumber.message}</small>}
                <br />
                <input name="zipcode" placeholder="מיקוד" {...register("zipcode", requirements.zipcode)} />
                {errors.zipcode && <small style={redColor}>{errors.zipcode.message}</small>}
               
                <br />
                <select /*style={selectStyle}*/>
                    {helpCategory.map((helpc) => (
                        <option value="someOption" /*style={optionStyle}*/>{helpc.type}</option>))}

                </select>
                <center>
                    <button type="submit">שליחת הטופס</button>
                </center>
            </form>
        </>
    )
};


// import React, { useState } from 'react';
// import axios from 'axios';
// import BasicForm from '../form/BasicForm'

// const CreateAssistantComponent = ({ fetchAssistants }) => {
//   const [newAssistant, setNewAssistant] = useState({
//     IdNumber: '',
//     FirstName: '',
//     LastName: '',
//     Age: 0,
//     NumOfChildren: 0,
//     PhoneNumber: '',
//     Email: '',
//     City: '',
//     Street: '',
//     BuildingNumber: 0,
//     ApartmentNumber: 0,
//     PostalCode: ''
//   });

//   const createAssistant = async () => {
//     try {
//       await axios.post('http://localhost:5089/api/assistants', newAssistant);
//       fetchAssistants();
//     } catch (error) {
//       console.error('Error creating assistant:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Assistant:</h2>
//       <BasicForm></BasicForm>
//       <div>
//         <input
//           type="text"
//           placeholder="מספר זהות"
//           value={newAssistant.IdNumber}
//           onChange={(e) => setNewAssistant({ ...newAssistant, IdNumber: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="שם פרטי"
//           value={newAssistant.FirstName}
//           onChange={(e) => setNewAssistant({ ...newAssistant, FirstName: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={newAssistant.LastName}
//           onChange={(e) => setNewAssistant({ ...newAssistant, LastName: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={newAssistant.Age}
//           onChange={(e) => setNewAssistant({ ...newAssistant, Age: Number(e.target.value) })}
//         />
//         <input
//           type="number"
//           placeholder="Number of Children"
//           value={newAssistant.NumOfChildren}
//           onChange={(e) => setNewAssistant({ ...newAssistant, NumOfChildren: Number(e.target.value) })}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={newAssistant.PhoneNumber}
//           onChange={(e) => setNewAssistant({ ...newAssistant, PhoneNumber: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newAssistant.Email}
//           onChange={(e) => setNewAssistant({ ...newAssistant, Email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           value={newAssistant.City}
//           onChange={(e) => setNewAssistant({ ...newAssistant, City: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Street"
//           value={newAssistant.Street}
//           onChange={(e) => setNewAssistant({ ...newAssistant, Street: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Building Number"
//           value={newAssistant.BuildingNumber}
//           onChange={(e) => setNewAssistant({ ...newAssistant, BuildingNumber: Number(e.target.value) })}
//         />
//         <input
//           type="number"
//           placeholder="Apartment Number"
//           value={newAssistant.ApartmentNumber}
//           onChange={(e) => setNewAssistant({ ...newAssistant, ApartmentNumber: Number(e.target.value) })}
//         />
//         <input
//           type="text"
//           placeholder="Postal Code"
//           value={newAssistant.PostalCode}
//           onChange={(e) => setNewAssistant({ ...newAssistant, PostalCode: e.target.value })}
//         />
//         <button onClick={createAssistant}>Create Assistant</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAssistantComponent;


// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from 'axios'


// export default function CreateAssistant() {
//     // const navigate = useNavigate();
//     const Id = useRef();
//     const FirstName = useRef();
//     const LastName = useRef();
//     const Age = useRef();
//     const NumOfChildren = useRef();
//     const PhoneNumber = useRef();
//     const Email = useRef();
//     const City = useRef();
//     const Street = useRef();
//     const BuildingNumber = useRef();
//     const ApartmentNumber = useRef();
//     const ZipCode = useRef();

//     const userExist = useRef();
//     const [newAssistant, setNewAssistant] = useState({
//         Id: '',
//         FirstName: '',
//         LastName: '',
//         Age: 0,
//         NumOfChildren: 0,
//         PhoneNumber: '',
//         Email: '',
//         City: '',
//         Street: '',
//         BuildingNumber: 0,
//         ApartmentNumber: 0,
//         ZipCode: ''
//     });

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     // const onSuccess = (data) => {navigate(`/HomePage/${data.userName}/${data.password}`)}
//     const onSuccess = (data) => {
//         setNewAssistant(newAssistant.Id = data.Id, newAssistant.FirstName = data.FirstName, newAssistant.LastName = data.LastName,
//             newAssistant.Age=data.Age, newAssistant.NumOfChildren = data.NumOfChildren, newAssistant.PhoneNumber = data.PhoneNumber,
//             newAssistant.email = data.Email, newAssistant.City=data.City, newAssistant.Street=data.Street,
//             newAssistant.BuildingNumber=data.BuildingNumber, newAssistant.ApartmentNumber=data.ApartmentNumber, newAssistant.ZipCode=data.ZipCode);
//         const options = {
//             headers: { 'Content-Type': 'application/json' }
//         };
//         axios.post(`http://localhost:5089/api/assistants`, JSON.stringify(newAssistant), options)
//             .then((response) => {
//                 if (response.status === 200) {
//                     console.log("assistant added ");
//                     console.log(response);
//                     // Perform actions after successful signup, e.g., redirect to login page or log in the user
//                 }
//             })
//             .catch((error) => {
//                 if (error.response) {
//                     // The request was made and the server responded with a status code
//                     // that falls out of the range of 2xx
//                     // if (error.response.status === 409) {
//                     //     console.log("assistant already exists. Please log in.");
//                         // Handle the case where the username already exists
//                     /*} else*/ if (error.response.status === 400) {
//                         console.log("Bad Request: ", error.response.data);
//                         // Handle validation errors or bad request
//                     } else if (error.response.status === 500) {
//                         console.log("Internal Server Error: ", error.response.data);
//                         // Handle server error
//                     } else {
//                         console.log("Error: ", error.response.data);
//                     }
//                 } else if (error.request) {
//                     // The request was made but no response was received
//                     console.log("No response received: ", error.request);
//                 } else {
//                     // Something happened in setting up the request that triggered an Error
//                     console.log("Error: ", error.message);
//                 }
//             })
//             .finally(() => {
//                 // Actions to perform regardless of success or failure
//             });
//     }


//     const onFailed = (error) => {
//         console.log("Form submission failed:", error);
//         console.log("Form errors:", errors);
//     }


//     const requirements = {
//         userName: {
//             required: true,
//             pattern: {
//                 value: /^[a-zA-Z0-9_]{4,}$/,
//                 message: 'Username must be at least 4 characters long and contain only letters, numbers, or underscores.',
//             },
//         },
//         password: {
//             pattern: {
//                 value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
//                 message: 'Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.',
//             },
//         },
//         email: {
//             pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: 'Please enter a valid email address.',
//             },
//         },
//     };


//     return (
//         <>
//             <form onSubmit={handleSubmit(onSuccess, onFailed)}>
//                 <input ref={Id} name="Id" placeholder="Id" {...register("Id", requirements.userName)} />
//                 <input ref={Id} name="Name" placeholder="firstName" {...register("FirstName", requirements.userName)   } />
//                 <input ref={Id} name="Name" placeholder="lastName" {...register("LastName", requirements.userName)   } />
//                 {/* <input ref={userName} name="userName" placeholder="enter your name"  {...register("userName", requirements.userName)} />
//                 {errors.userName && <small style={{ color: "red" }}>{errors.userName.message}</small>}
//                 <br />
//                 <input type="password" ref={password} name="password" placeholder="enter password" {...register("password", requirements.password)} />
//                 {errors.password && <small style={{ color: "red" }}>{errors.password.message}</small>}
//                 <br />
//                 <input ref={email} name="email" placeholder="enter your email" {...register("email", requirements.email)} />
//                 {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>} */}
//                 <center>
//                     <button type="submit">Submit</button>
//                 </center>
//             </form>
//         </>
//     )
// };