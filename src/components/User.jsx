import { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard"
import { UserContext } from "../context/UserProvider";

function User() {
  const [input, setInput] = useState("");
  const {users, getUsers} = useContext(UserContext);
  
  useEffect(()=>{
    getUsers(input)
  }, [input])

  return (
    <div className="px-5 ">
        <h1 className="font-bold text-xl mt-5">User</h1>
        <input onChange={(e)=>setInput(e.target.value)} value={input} className="border-2 border-gray-300 mt-2 p-2 rounded-lg w-full" type="text" placeholder="Search User..." />
        <div className="mt-5 overflow-auto max-h-[60vh] px-5">
          {
            users.map((user) => {
              return (
                <UserCard key={user._id} user={user}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default User