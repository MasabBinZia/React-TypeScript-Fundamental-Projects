import React, { useState } from 'react';
import data from './data';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let amount = parseInt(count.toString(), 10);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center w-90vw mx-auto max-w-40rem mt-20 text-center'>
      <h3 className='uppercase'>tired of boring lorem ipsum?</h3>
      <form className='lorem-form capitalize tracking-spacer mt-8 mb-16 flex justify-center items-center' onSubmit={handleSubmit}>
        <label className='text-lg' htmlFor='amount'>paragraphs:</label>
        <input className='px-1 py-2 w-16 rounded-lg border-none mx-2 text-lg text-black'
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
        />
        <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item: string, index: number) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
