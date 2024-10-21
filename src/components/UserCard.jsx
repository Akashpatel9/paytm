import React from "react";
import Button from "./Button";

function UserCard({ username }) {
  return (
    <div className="flex items-center gap-3 justify-between border-b-2">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 bg-zinc-200 rounded-full flex items-center justify-center">
          {" "}
          H{" "}
        </div>
        <div>{username}</div>
      </div>
      <Button>Send Money</Button>
    </div>
  );
}

export default UserCard;
