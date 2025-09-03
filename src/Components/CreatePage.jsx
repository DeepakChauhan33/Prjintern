import React from 'react'
import { useNavigate } from "react-router-dom";

const CreatePage = () => {

    const navigate = useNavigate();


    

  return (


    <>

         <main className='h-dvh sm:flex sm:justify-center sm:items-center sm:h-screen sm:w-screen'>

            <div className='p-4 flex flex-col  h-full gap-3 sm:h-[75%] sm:min-w-[380px] sm:rounded-lg sm:shadow-lg bg-gray-100'>

              <h1 className='text-[25px] font-semibold mb-1.5'>
                Create your <br/>
                PopX account
              </h1>

             <form  >

                <div className="mb-4.5 flex flex-col border-2 pl-3  border-gray-400 rounded-md  ">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100 max-w-fit text-fuchsia-800 px-1 '>Full Name <sup className="text-red-600">*</sup></label>
                  <input 
                  className='h-10 outline-none'
                  type="text" placeholder='Enter eamil address' required />
                </div>

                <div className="mb-4.5 flex flex-col border-2 pl-3  border-gray-400 rounded-md  ">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100 max-w-fit text-fuchsia-800 px-1 '>Phone number <sup className="text-red-600">*</sup></label>
                  <input 
                  className='h-10 outline-none'
                  type="password" placeholder='Enter password' required />
                </div>

                <div className="mb-4.5 flex flex-col border-2 pl-3  border-gray-400 rounded-md  ">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100 max-w-fit text-fuchsia-800 px-1 '>Email address <sup className="text-red-600">*</sup></label>
                  <input 
                  className='h-10 outline-none'
                  type="password" placeholder='Enter password' required/>
                </div>


                <div className="mb-4.5 flex flex-col border-2 pl-3  border-gray-400 rounded-md  ">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100 max-w-fit text-fuchsia-800 px-1 '>Password <sup className="text-red-600">*</sup></label>
                  <input 
                  className='h-10 outline-none'
                  type="password" placeholder='Enter password' required/>
                </div>

                <div className="mb-4.5 flex flex-col border-2 pl-3  border-gray-400 rounded-md  ">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100 max-w-fit text-fuchsia-800 px-1 '>Company name </label>
                  <input 
                  className='h-10 outline-none'
                  type="password" placeholder='Enter password'/>
                </div>


                <p>Are you an Agency?<sup className="text-red-600">*</sup></p>

                <div className='flex space-x-5 mb-8'>
                    

                    <label className='flex items-center space-x-2 cursor-pointer'>
                    <input type="radio"  name='yesno' value="yes"/>
                    <span>Yes</span>
                    </label>

                    <label className='flex items-center space-x-2 cursor-pointer'>
                    <input type="radio"  name='yesno' value="no"/>
                    <span>No</span>
                    </label>
                </div>

                

                <button 
                type='button'
                className='w-full bg-[#870fe1] text-white p-2 rounded-md cursor-pointer '
                onClick={() => navigate("/account")}
                >login</button>
             </form>
            </div>
          
          </main>

    </>
  )
}

export default CreatePage
