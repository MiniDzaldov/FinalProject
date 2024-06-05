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
         <h5>:אשמח מאד לקבל סיוע ב</h5> <h4>{user.categoryCodeNavigation.type}</h4>
          <h5> :צרו איתי קשר ב</h5>
          <h5> <i class="bi bi-telephone"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></i>  {user.phoneNumber}</h5>
          <h5>:או</h5>
          <h5> <i style={{'color':'balck'}} class="bi bi-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></i>  {user.email}</h5>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere {user.firstName}</Button> */}
      </Card.Body>
    </Card>))}
    </div>
</>
);
};
export default AssistsDetailsFetch;
