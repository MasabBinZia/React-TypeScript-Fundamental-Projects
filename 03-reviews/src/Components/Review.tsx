import React, { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Review: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const { name, job, image, text } = people[index];
    const checkNumber = (number: number): number => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <article className='bg-white p-6 rounded-md shadow-md transition-all duration-300 ease-linear hover:shadow-lg text-center'>
            <div className=' relative w-36 h-36 rounded-full mx-auto mb-6'>
                <img src={image} alt={name} className='w-full block h-full object-cover rounded-full relative' />
            </div>
            <h4 className=' mb-1 '>{name}</h4>
            <p className='mb-2 text-xs font-bold text-lightseagreen uppercase '>{job}</p>
            <p className='mb-3'>{text}</p>
            <div className='button-container'>
                <button className='text-blue-500 text-lg border-transparent mx-2 transition-colors duration-300 cursor-pointer ' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='text-blue-500 text-lg border-transparent mx-2 transition-colors duration-300 cursor-pointer' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    );
};

export default Review;