import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='flex justify-center bg-orange-200 items-center h-full w-full'>
      
      <div className='container bg-orange-300 w-[90%] h-[90%] flex flex-col rounded-2xl justify-center'>
        <div className='flex justify-center h-[130px] w-full border-2'>
          <label htmlFor='city' className='text-[30px] font-medium'>ENTER CITY:</label>
          <input type='text' placeholder='enter city name' name='city'></input>
        </div>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='first p-[100px]'>
            <h1 className='font-bold text-[40px]'>AQI:</h1>
        </div>

        <div className='second p-[100px] text-[40px]'>
            <h1 className='font-bold'>CONDITION:</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App