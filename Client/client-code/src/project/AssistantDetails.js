
import { useState, useEffect } from 'react';

const AssistantDetailsFetch = () => {
  const [users, setUsers] = useState([]);
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

   {/*fix the data to table show....  */}
   { users.map(user => (<div>name: {user.name},  email: {user.email}, phoneNumber: {user.phoneNumber}, category: {user.categoryCode}, address: {user.addressCode}</div>))} </>
  );
};
export default AssistantDetailsFetch;
