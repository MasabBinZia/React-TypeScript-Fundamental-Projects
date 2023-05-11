import { useState } from 'react';
import { data } from './data';
import List from "./List";

function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
      <main className='min-h-screen flex justify-center items-center'> 
        <section className='w-90vw mx-auto max-w-1170px md:w-95vw'>
          <div className="w-90vw mx-auto max-w-450 bg-white rounded-md p-6 mt-20 shadow-md">
          <h3 className='font-normal text-lg mb-8'>{people.length} birthdays today</h3>
          <List people={people} />
          <button className='' onClick={() => setPeople([])}>clear all</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
