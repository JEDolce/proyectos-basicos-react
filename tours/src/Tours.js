import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {  // siempre empezar destructurando
  return (
  <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {    // Iteramos por cada item de tours 
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;    // con el spread op me aseguro de acceder a todas las propiedades del objeto (el que esta en la url)
      })};
    </div>
  </section>
  );
};

export default Tours;
