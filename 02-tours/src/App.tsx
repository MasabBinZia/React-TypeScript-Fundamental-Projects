import { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

type TourType = {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<TourType[]>([]);

  const removeTour = (id: number): void => {
    const newTours = tours.filter((tour: TourType) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className='w-90vw max-w-620 mx-auto my-20'>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className='w-90vw max-w-620 mx-auto my-20 text-center'>
        <div className='bg-'>
          <h2 className='text-2xl mb-3 capitalize tracking-wide'>No tours left</h2>
          <button className='btn bg-blue-700 inline-block px-2 py-1 rounded-sm text-uppercase text-white tracking-wider border border-transparent cursor-pointer mt-8 text-lg md:text-xl' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className='w-90vw max-w-20 mx-auto my-20 '>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
