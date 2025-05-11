import React from 'react'
import './App.css'

const App = () => {

  // const[state, setState] = useState("")

  return (
    <div className='flex justify-center items-center h-full w-full bg-purple-300'>
      
      <div className='container w-[90%] h-[90%] flex flex-col rounded-2xl shadow-white shadow-lg'>
        <div className='flex flex-col items-center h-[130px] w-full gap-[12px]'>
          <label htmlFor='city' className='text-[30px] font-medium mt-[50px]'>SEARCH:</label>
          <input type='text' placeholder='Enter city name' name='city' className='border-2 rounded-md p-[10px]'></input>
          <button type='submit'>GO</button>
        </div>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='first p-[100px]'>
            <h1 className='font-bold text-[32px] md:text-[38px]'>AQI:</h1>
        </div>

        <div className='second p-[100px] text-[32px] md:text-[38px]'>
            <h1 className='font-bold'>CONDITION:</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App