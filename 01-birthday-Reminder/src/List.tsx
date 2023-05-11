import React from 'react';

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

interface Props {
  people: Person[];
}

const List: React.FC<Props> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='grid grid-cols-2 gap-3 mb-6 items-center'>
            <img className='w-12 h-12 object-cover rounded-full shadow-sm' src={image} alt={name} />
            <div>
              <h4 className='mb-1 font-medium' >{name}</h4>
              <p className='text-sm'>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
