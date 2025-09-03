import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import {camera} from "lucide-react"

const Account = () => {
  return (
    <>
          <main className="flex justify-center items-center h-dvh w-screen bg-gray-100">
      {/* Card */}
      <div className="flex flex-col w-full h-full sm:h-[75%] sm:max-w-[380px] sm:rounded-lg sm:shadow-lg bg-white">
                <p className='p-4 bg-gray-500'>Account Setting</p>

                <div className='flex  w-full p-1.5 '>

                    <div>
                    <img 
                    className=' h-18 w-18 rounded-full mr-2.5 object-cover mt-1.5'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHo2ZyyMTK_nsBZhMGUcOoMtI1U083DKd6EUExMH_AqhC0GUACUazaLnxpgfK0ZhB8n0&usqp=CAU" alt="" />

                    </div>

                    <div className=''>
                        <strong>Marry Doe</strong>
                    <p className='text-[15px]'>Marry@gmail.com</p>
                    </div>
                </div>

                <p 
                className='text-[13px] p-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt? Suscipit ducimus eligendi, unde provident voluptas debitis tempora reprehenderit quam.
                </p>
            </div>

        </main>
    </>
  )
}

export default Account
