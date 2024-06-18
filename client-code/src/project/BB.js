import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const VolunteerCard = ({ a }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card style={{ width: '18rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
      <Card.Body>
        <Card.Title><h4>{a.name}</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <h4>{a.title}</h4>
        </Card.Subtitle>
        <Card.Text>
          <h4>{a.shortDescription}</h4>
        </Card.Text>
        <Collapse in={showDetails}>
          <div id="collapse-details">
            <Card.Text>
              <h4>{a.details}</h4>
            </Card.Text>
          </div>
        </Collapse>
        <Button
          variant="primary"
          onClick={toggleDetails}
          aria-controls="collapse-details"
          aria-expanded={showDetails}
        >
          {showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VolunteerCard;


// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// const VolunteerCard = ({ a }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }}>
//       <Card.Body>
//         <Card.Title><h4>{a.name}</h4></Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           <h4>{a.title}</h4>
//         </Card.Subtitle>
//         <Card.Text>
//           <h4>{a.shortDescription}</h4>
//         </Card.Text>
//         {showDetails && (
//           <Card.Text>
//             <h4>{a.details}</h4>
//           </Card.Text>
//         )}
//         <Button variant="primary" onClick={toggleDetails}>
//           {showDetails ? 'הסתר פרטים' : 'צפו בפרטים'}
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default VolunteerCard;
