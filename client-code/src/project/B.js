import React from 'react';
import VolunteerCard from './BB';

const volunteer1 = {
  name: 'מיכאל לוי',
  title: 'מתנדב בקהילה',
  shortDescription: 'עוזר בכל יום שישי בצהריים',
  details: 'מתנדב בקהילה מעל 5 שנים, מתמקד בעזרה לקשישים ובחלוקת מזון לנזקקים.'
};

const volunteer2 = {
  name: 'מיכאל לוי',
  title: 'מתנדב בקהילה',
  shortDescription: 'עוזר בכל יום שישי בצהריים',
  details: 'מתנדב בקהילה מעל 5 שנים, מתמקד בעזרה לקשישים ובחלוקת מזון לנזקקים.'
};

const volunteers = [volunteer1, volunteer2];

const B = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {volunteers.map((volunteer, index) => (
        <VolunteerCard key={index} a={volunteer} />
      ))}
    </div>
  );
};

export default B;
