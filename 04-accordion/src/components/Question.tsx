import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type QuestionProps = {
  title: string;
  info: string;
};

const Question = ({ title, info }: QuestionProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <article className='question p-4 border border-gray-300 mb-4 rounded shadow-lg  '>
      <header className='flex justify-between items-center'>
        <h4 className='normal-case leading-normal'>{title}</h4>
        <button className='btn bg-transparent border-transparent w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full text-pink-600 cursor-pointer ml-4 self-center min-w-8' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className='text-gray-500 mt-2 mb-0'>{info}</p>}
    </article>
  );
};

export default Question;
