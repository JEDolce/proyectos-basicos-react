import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  // Dos estados: Loading y Tours
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id); // elimino el tour con id igual al seleccionado
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true); // para asegurarnos que sea siempre true

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false) // lo pasamos a false para que muestre tours
      setTours(tours)   // mostramos la info que viene de la url
    } catch (error) {
      setLoading(false) // aunque haya un error, tenemos que pasarlo a false
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className='btn' onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App
