
function Appbar({user}) {
  return (
    <div className='w-full flex items-center justify-between p-5 text-3xl font-semibold border-b-2'>
      Payments App
      <div className='flex items-center gap-5 font-semibold text-lg'>
        Hello, {user.firstName}
        <div className='bg-zinc-200 h-14 w-14 rounded-full flex items-center justify-center font-bold text-xl uppercase'>{user.firstName[0]}</div>
      </div>
    </div>
  )
}

export default Appbar