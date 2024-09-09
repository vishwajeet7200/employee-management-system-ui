import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const location=useLocation();
  const navigate=useNavigate();
  return (
    <div>
        <div className='align-middle px-5 py-5'>
            <p className='h-20'>
                {location.state.error}
                example
            </p>
            <button
            onClick={() => {
                navigate('/');
            }}
            className='rounded bg-green-400 hover:bg-green-800 px-6 py-4'>
                go back to Home page</button>
        </div>
    </div>
  )
}

export default ErrorPage