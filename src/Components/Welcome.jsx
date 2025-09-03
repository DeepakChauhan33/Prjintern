
import React from 'react'
import { NavLink } from "react-router-dom";

const Welcome = () => {
    return (
        <>






            <main className="flex justify-center items-center h-dvh w-screen bg-gray-100">
      {/* Card */}
      <div className="flex flex-col w-full h-full sm:h-[75%] sm:max-w-[380px] sm:rounded-lg sm:shadow-lg bg-white">
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
