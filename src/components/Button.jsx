function Button({children, loading}) {
  return (
    <div className={`text-center cursor-pointer ${loading?"bg-zinc-800":"bg-black"} text-white p-2 rounded-lg my-4 font-semibold`}>{children}</div>
  )
}

export default Button