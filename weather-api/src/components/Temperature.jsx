import React from 'react'

function temperature({setCity,stats}) {

  const handleCityChange=(e)=>{
    setCity(e.target.value);
  }
  return (
    <>
      <div className='flex'>
        <input 
        type="text"
        className='bg-slate-600 border border-slate-500 text-slate-200 placeholder:text-slate-300 placeholder:text-sm max-w-52 text-xl p-2 focus:outline-none focus:border-slate-400 rounded-sm'
        placeholder='Enter Your City Name'
        onChange={handleCityChange}
        defaultValue="Bangalore"
        /> 
        <div className='ml-2 mt-2 mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 scale-100 hover:scale-110 transition-transform  duration-300 ease-in-out">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      </div>
      <div className='flex justify-center mt-8'>
        {stats.isDay!=0 ?(
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="w-12 h-12 scale-100 hover:scale-110 transition-transform  duration-300 ease-in-out">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        ):
        (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12 scale-100 hover:scale-110 transition-transform  duration-300 ease-in-out">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>

        )}
        
      </div>
      <div className='flex justify-center items-center mt-4 scale-100 hover:scale-110 transition-transform  duration-300 ease-in-out'>
        <p className='font-semibold text-[55px] text-slate-200 '>
          {stats.temp}
        </p>
          <span className='text-[40px] text-slate-200'>°C</span>
      </div>
      <div className='flex justify-center items-center text-slate-400 mt-4 text-[25px]'>{stats.condition}</div>
      <div className='flex justify-center text-slate-400 mt-5 text-[15px]'>
        {stats.isDay}  {stats.localtime} | {stats.location}
      </div>
    </>
  )
}

export default temperature
