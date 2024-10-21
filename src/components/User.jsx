import UserCard from "./UserCard"

function User() {
  return (
    <div className="p-5">
        <h1 className="font-bold text-xl mt-5">User</h1>
        <input className="border-2 border-gray-300 mt-2 p-2 rounded-lg w-full" type="text" placeholder="Search User..." />
        <div className="mt-5 overflow-auto max-h-[65vh]">
            <UserCard username={"John Doe"}/>
            <UserCard username={"John Doe"}/>
        </div>
    </div>
  )
}

export default User