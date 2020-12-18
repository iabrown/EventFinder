import React from 'react';
import EventCard from './EventCard';

const EventList = (props) => {
  const images = props.images.map((image) => {
    return <EventCard key={image.id} image={image}/>
  });
  return <div className="EventList">{images}</div>
};

export default EventList;
