
import React from 'react'
import { NavLink } from "react-router-dom";

const Welcome = () => {
    return (
        <>






            <main className='h-dvh sm:flex sm:justify-center sm:items-center sm:h-screen sm:w-screen'>

            <div className='p-4 flex flex-col justify-end  h-full gap-3 sm:h-[75%] sm:min-w-[380px] sm:rounded-lg sm:shadow-lg bg-gray-100'>
                    <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
                    <p className="text-gray-600 mb-6 ">
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,
                    </p>



                    

                    <NavLink to="/createPage" className='bg-[#870fe1] text-white rounded-sm p-2 text-center'>
                        Create Account
                    </NavLink>
                    
                    <NavLink to="/signin" className='bg-[#bf83ed] rounded-sm p-2 text-center'>
                        Already Registered? Login
                    </NavLink>

                    

                </div>

            </main>


        </>
    )


}

export default Welcome
