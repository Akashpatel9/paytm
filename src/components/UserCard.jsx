import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="flex items-center gap-3 justify-between border-b-2">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 bg-zinc-200 rounded-full flex items-center justify-center uppercase">
        {user.username[0]}
        </div>
        <div>{user.username}</div>
      </div>
      <Button><Link to={`/payment/${user._id}`} >Send Money</Link></Button>
    </div>
  );
}

export default UserCard;
