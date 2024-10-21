import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function Appbar({ user }) {
  const {logout} = useContext(AuthContext);
  return (
    <div className="w-full flex items-center justify-between p-5 text-3xl font-semibold border-b-2">
      Payments App
      <div className="flex items-center gap-5 font-semibold text-lg">
        <button onClick={logout} className="bg-black text-white rounded-sm px-4 py-2">Log Out</button>
        <h1>Hello, {user.firstName}</h1>
        <div className="bg-zinc-200 h-14 w-14 rounded-full flex items-center justify-center font-bold text-xl uppercase">
          {user.firstName[0]}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
