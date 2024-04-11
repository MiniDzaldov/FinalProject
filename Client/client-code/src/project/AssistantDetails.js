
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AssistantDetailsFetch = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://localhost:7189/api/Assistant')
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
   { users.map(user => (<div>name: {user.name},  email: {user.email}, phoneNumber: {user.phoneNumber}, category: {user.categoryCode}, address: {user.addressCode}</div>))} </>
  );
};
export default AssistantDetailsFetch;
