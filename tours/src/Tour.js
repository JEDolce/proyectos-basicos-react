import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour }) => {  // siempre empezar destructurando las propiedades
  const [readMore, setReadMore] = useState(false);

  return (
  <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      {/* si readMore es true muestro todo, sino muestro hasta 200 caracteres (default) */}
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}> {/* paso el valor contrario */}
          {readMore ? 'show less' : 'read more'}
        </button>    
      </p>    
      <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
    </footer>
  </article>
  );
};

export default Tour;
