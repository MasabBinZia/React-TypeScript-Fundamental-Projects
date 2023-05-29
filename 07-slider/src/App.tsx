import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

interface Person {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(data);
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length;
      return result;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % people.length;
        return result;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section'>
      <div className='title flex text-center mb-8 justify-center '>
        <h2 className='flex text-center justify-center font-medium'>
          <span className='font-bold mr-4 '>/</span>reviews
        </h2>
      </div>
      <div className='section-center mx-auto mt-16 w-80vw h-96 max-w-800px text-center relative flex overflow-hidden'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={`${position}` } key={id} >
              <img src={image} alt={name} className='person-img rounded-full mb-4 w-36 h-36 object-cover border-4 border-gray-400 shadow dark:shadow-md text-center justify-center' />
              <h4 className='uppercase mb-1'>{name}</h4>
              <p className='title capitalize mb-3'>{title}</p>
              <p className='text max-w-35em mx-auto mt-8 leading-8'>{quote}</p>
              <FaQuoteRight className='icon text-3xl mt-4' />
            </article>
          );
        })}
        <button className='prev absolute top-200 transform -translate-y-1/2 bg-blue-500 text-white w-5 h-14 grid place-items-center border-transparent text-base rounded transition hover:bg-primary-500 left-0' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next next absolute top-200 transform -translate-y-1/2 bg-blue-500 text-white w-5 h-5 grid place-items-center border-transparent text-base rounded transition hover:bg-primary-500 right-0' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
