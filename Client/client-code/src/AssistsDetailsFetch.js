import { useState, useEffect } from 'react';

const AssistsDetailsFetch = () => {
  const [users, setUsers] = useState([]);
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
    users.map(user => (<div>name: {user.name},  email: {user.email}, phoneNumber: {user.phoneNumber}, category: {user.categoryCode}</div>))
  );
};
export default AssistsDetailsFetch;
