export const Events = () => {
  const upcomingEvents = [
    {
      title: "TS Academy Session",
      time: "6:00pm - 8:00pm",
      
    },
    {
      title: "Reading Time",
      time: "9:00pm - 10:00pm",
     
    },
  ];

  return (
    <div
      
    >
      <h2>Upcoming Events(Tomorrow)</h2>

      {upcomingEvents.map((event, index) => (
        <div key={index} >
          
          <p>{event.title}</p>
          <p>{event.time}</p>
        </div>
      ))}
    </div>
  );
};
