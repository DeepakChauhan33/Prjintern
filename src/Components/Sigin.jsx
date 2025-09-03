import React from 'react'
import { useNavigate } from "react-router-dom";


const Sigin = () => {

  const navigate = useNavigate();


  

    return (
        <>


           <main className='h-dvh sm:flex sm:justify-center sm:items-center sm:h-screen sm:w-screen'>

            <div className='p-4 flex flex-col  h-full gap-3 sm:h-[75%] sm:min-w-[380px] sm:rounded-lg sm:shadow-lg bg-gray-100'>

              <h1 className='text-2xl font-bold mb-2'>
                Signin to your <br/>
                PopX account
              </h1>

              <p className='text-gray-600 mb-6 text-md'>
                Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit,
              </p>
             <form  >

                <div className="mb-3 flex flex-col border-2 pl-3  border-gray-400">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100 e max-w-fit text-fuchsia-500 px-1'>Email Address</label>
                  <input 
                  className='h-10 outline-none'
                  type="text" placeholder='Enter eamil address' />
                </div>

                <div className="mb-3 flex flex-col border-2 pl-3  border-gray-400">
                  <label className='absolute text-[16px] -translate-y-3.5 bg-gray-100  max-w-fit text-fuchsia-500 px-1'>Password</label>
                  <input 
                  className='h-10 outline-none'
                  type="password" placeholder='Enter password' />
                </div>

                <button 
                type='button'
                className='w-full bg-[#a1a2a5] text-white h-12 rounded-md mt-4 cursor-pointer'
                onClick={() => navigate("/account")}>
                  login</button>
             </form>
            </div>
          
          </main>

        </>
    )
}

export default Sigin
