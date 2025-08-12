import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  let navigate = useNavigate()

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>


      <button onClick={() => { navigate("/weather/lahore") }}>Lahore</button>
      <button onClick={() => { navigate("/weather/karachi") }}>Karachi</button>
      <button onClick={() => { navigate("/weather/rawalpindi") }}>Rawalpindi</button>
      <button onClick={() => { navigate("/weather/sahiwal") }}>Sahiwal</button>


      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Holy smokes!</strong>
        <span class="block sm:inline">Something seriously bad happened.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </span>
      </div>

      <div className='flex bg-blue-950'>
        <div class="w-14 flex-none ...">01</div>
        <div class="w-64 flex-1 ...">02</div>
        <div class="w-32 flex-1 ...">03</div>
      </div>


      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="/card-top.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </>
  )
}

export default App
