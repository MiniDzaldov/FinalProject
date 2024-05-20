
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AssistantDetailsFetch = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const txt = {"textAlign": "center"}


  useEffect(() => {
    fetch('http://localhost:5089/api/Assistants')
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
    <button  onClick={() => navigate("/assist_details")}>Show Assist Details</button>
    <br></br>
    <center>
      <p>Assistant Details Table <h5>(12/04/2024 01:37)</h5></p>
    </center>
    <br></br>
   {/*fix the data to table show....  */}
   {/* { users.map(user => (<div>name: {user.firstName},  email: {user.email}, phoneNumber: {user.phoneNumber}, category: {user.categoryCode}, address: {user.addressCode}</div>))}  */}

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
export default AssistantDetailsFetch;
