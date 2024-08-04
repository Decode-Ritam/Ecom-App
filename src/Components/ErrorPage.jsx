import React from 'react'
import Header from '../ComponentsTemplate/Header'
 import { useNavigate } from 'react-router-dom';



function ErrorPage() {

  const navigate = useNavigate();
    return (
    <div className='bg-white dark:bg-black'>
       <div className='flex flex-col items-center justify-center h-[calc(100vh-56px)] gap-4 '>
        <div className="text-5xl text-black dark:text-white font-bold"> &#128533; </div>
        <div className="text-5xl text-black dark:text-white font-bold">Error 404 </div>
        <p className="text-2xl text-black dark:text-white">Sorry, the page that you’re looking for doesn’t exist.</p>
        <button
          onClick={() => navigate('/')}
          className="text-xl  text-white px-6 py-4 bg-[#6254f3] hover:bg-[#3f2eff] rounded-sm">
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage