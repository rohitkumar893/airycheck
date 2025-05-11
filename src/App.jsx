import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='flex justify-center bg-orange-200 items-center h-full w-full'>
      <div className='container bg-orange-300 w-[90%] h-[90%] flex rounded-2xl md:flex-row flex-col justify-around'>
        <div className='first p-[100px]'>
            <h1 className='font-bold text-[40px]'>AQI:</h1>
        </div>

        <div className='second p-[100px] text-[40px]'>
            <h1 className='font-bold'>CONDITION:</h1>
        </div>
      </div>
    </div>
  )
}

export default App