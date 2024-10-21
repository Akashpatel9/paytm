import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function Appbar({ user }) {
  const { logout } = useContext(AuthContext);
  return (
    <div className="w-full flex items-center justify-between p-5 text-3xl font-semibold border-b-2">
      <h1 className="hidden md:block">Payments App</h1>
      <div className="flex items-center gap-5 font-semibold text-lg justify-between w-full md:w-fit md:justify-normal">
        <button
          onClick={logout}
          className="bg-black text-white rounded-sm md:px-4 py-2 px-2 md:py-2 text-sm md:text-base"
        >
          Log Out
        </button>
        <div className="flex items-center gap-2">
          <h1>Hello, {user.firstName}</h1>
          <div className="bg-zinc-200 md:h-14 md:w-14 h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl uppercase">
            {user.firstName[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
