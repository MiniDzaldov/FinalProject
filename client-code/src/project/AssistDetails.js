import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import AssistantDetailsButton from './button/AssistantDetailsButton';

const AssistsDetailsFetch = () => {
  // State to hold the fetched data
  const [assists, setAssists] = useState([]);
  const color={"color": "black", "fontsize":"5px"}
  const txt = {"textAlign": "center"}
  const cardSize ={"width": "22rem", "height": "20rem","marginRight": "0.5rem", "marginLeft": "0.5rem", "marginBottom":"5px" ,"borderColor" : "gray", "marginTop":"1.5rem"}

  // Function to fetch data from the API
  const fetchAssists = async () => {
    try {
      // Make a GET request to fetch assists data
      const response = await axios.get('http://localhost:5089/api/Assists');

      // Set the fetched data to the state
      setAssists(response.data);
      console.log(response.data);
    } catch (error) {
      // Handle errors if any
      console.error('Error fetching assists:', error);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchAssists();
  }, []); // Empty dependency array means it runs only once when the component mounts


  return (
<>
 <AssistantDetailsButton></AssistantDetailsButton>
    <br></br>

<div style={{ "display": "flex", "flex-wrap": "wrap" }}>
{assists.map((user) =>(
  
<Card border="danger" style={cardSize}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Text style={color}>
          <h4>{user.firstName + " " + user.lastName}</h4> 
          <br></br>
         <h5>I would love to get help with: </h5> <h4>{user.categoryCodeNavigation.type}</h4>
          <h5>Please contact me at:</h5>
          <h5>{user.phoneNumber}</h5>
          <h5>or:</h5>
          <h5>{user.email}</h5>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere {user.firstName}</Button> */}
      </Card.Body>
    </Card>))}
    </div>
</>
);
};
export default AssistsDetailsFetch;
