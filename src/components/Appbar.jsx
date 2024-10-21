import React from 'react'

function Appbar() {
  return (
    <div className='w-full flex items-center justify-between p-5 text-3xl font-semibold border-b-2'>
      Payments App
      <div className='flex items-center gap-5 font-semibold text-lg'>
        Hello, World
        <div className='bg-zinc-200 h-14 w-14 rounded-full flex items-center justify-center font-bold text-xl'>U</div>
      </div>
    </div>
  )
}

export default Appbar