import React, { useState } from 'react';

type TourProps = {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
  removeTour: (id: number) => void;
};

const Tour: React.FC<TourProps> = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="bg-white rounded-sm mt-8 mb-8 shadow-sm transition duration-300 ease-linear single-tour hover:shadow w-1/2 item-center m-auto ">
      <img className='w-full h-80 object-cover rounded-tl-sm rounded-tr-sm' src={image} alt={name} />
      <footer className='px-8 py-6'>
        <div className="flex justify-between items-center mb-6 tour-info">
          <h4 className='mb-0 text-sm capitalize tracking-wide'>{name}</h4>
          <h4 className="text-blue-500 bg-light-blue-100 px-2 py-1 rounded-sm text-sm mb-3 capitalize tracking-wide">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='bg-transparent border-transparent text-blue-500 text-base cursor-pointer pl-1' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="mx-auto mt-4 text-red-500 tracking-wider bg-transparent border border-red-500 px-2 py-1 rounded-sm" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
