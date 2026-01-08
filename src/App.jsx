import React from 'react'

const App = () => {
  return (
    <div  className='  h-screen flex justify-center items-center '>

      {/* Calculator */}
      <div className=' text-white w-[620px] h-auto bg-gray-800 rounded-2xl flex justify-center flex-col pb-10'>

        {/* Display box */}
     
        <div className='bg-black w-[550px] h-[80px] mt-6 rounded   flex justify-end text-7xl font-medium items-center pr-5  mx-auto '>
          0
        </div>

        {/* Buttons Section */}
        <div className='grid grid-cols-4 gap-6 mt-8  w-[550px] mx-auto'>
          <div className='bg-gray-400 text-3xl w-full h-16 flex justify-center items-center rounded-lg shadow-2xl col-span-3'>Clear All</div>
        
          <div className='bg-amber-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>/</div>

          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-lg shadow-2xl'>7</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>8</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>9</div>
          <div className='bg-amber-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>+</div>


          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-lg shadow-2xl'>4</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>5</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>6</div>
          <div className='bg-amber-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>-</div>


          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-lg shadow-2xl'>1</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>2</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>3</div>
          <div className='bg-amber-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>*</div>

          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-lg shadow-2xl col-span-2'>0</div>
          <div className='bg-gray-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>.</div>
          <div className='bg-amber-700 text-3xl w-full h-16 flex justify-center items-center rounded-2xl shadow-2xl'>=</div>

        </div>
        </div>
      </div>
  )
}

export default App
