import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form className='p-3'>
                <input type='text' placeholder='Name' className='border p-1 rounded ml-3' />
                <input type='text' placeholder='email'  className='border p-1 rounded ml-3'/>
                <button className='ml-4 bg-gray-100 p-1 rounded'>Submit</button>

            </form>



        </div>
    )
}

export default Contact
