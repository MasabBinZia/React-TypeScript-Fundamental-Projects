import Review from './Components/Review'
import './App.css'

function App() {


  return (
    <>
      <main className='min-h-screen grid place-items-center'>
        <section className='container w-90vw mx-auto max-w-1170px md:w-95vw'>
          <div className='text-center mb-16'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  )
}

export default App
