import React from 'react';
import Tour from './Tour';

type TourType = {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
}

type ToursProps = {
  tours: TourType[];
  removeTour: (id: number) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section className='w-90vw mx-auto max-w-1170 '>
      <div className="text-center mb-16">
        <h2 className='text-2xl mb-3 capitalize tracking-wide'>
          <span className="border-b-2 border-blue-500">Our tours</span>
        </h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
