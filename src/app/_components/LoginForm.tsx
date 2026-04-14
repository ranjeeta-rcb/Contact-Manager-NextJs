"use client";
import React from 'react'

const LoginForm = () => {
  return (
  <form className='space-x-4'>
    <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="text" placeholder="Enter your email" required
        className='mt-1 block w-full rounded-md boder-gray-300 shadow-sm' />

        <input type="password" name="number" placeholder="Enter password" required
        className='mt-1 block w-full rounded-md boder-gray-300 shadow-sm' />
    </div>
  </form>
  )
}

export default LoginForm