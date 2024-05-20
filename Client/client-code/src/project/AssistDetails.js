import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AssistsDetailsFetch = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const txt = {"textAlign": "center"}


  useEffect(() => {
    fetch('http://localhost:5089/api/Assists')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
<>
    <button onClick={() => navigate("/assistant_details")}>Show Assistant Details</button>
    <br></br>
    <center>
      <p>Assist Details Table <h5>(12/04/2024 01:36)</h5></p>
    </center>
    <br></br>
    <center>
    <table class="table table-striped" style={{"width": "90rem", "alignContent":"center"}}>
        <tr>
            <th style={txt}>Name</th>
            <th style={txt}>Email</th>
            <th style={txt}>PhoneNumber</th>
            <th style={txt}>Category</th>
        </tr>
        {users.map((user) =>(
        <tr>
            <td style={txt}>{user.firstName + " " + user.lastName}</td>
            <td style={txt}>{user.email}</td>
            <td style={txt}>{user.phoneNumber}</td>
            <td style={txt}>{user.categoryCode}</td>
        </tr>
       ))}
    </table>
</center>
</>
);
};
export default AssistsDetailsFetch;


// import React from 'react';
// import axios from 'axios';

// const AssistsDetailsFetch=()=> {
  
//   state = {
//     persons: []
//   }

//   componentDidMount=() => {
//     axios.get(`https://localhost:7189/api/Assists`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   };

 
//     return (
//       <ul>
//         {
//           this.state.persons
//             .map(person =>
//               <li key={person.id}>{person.name}</li>
//             )
//         }
//       </ul>
//     )
//   };
//   export default AssistsDetailsFetch;