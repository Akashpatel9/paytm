import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      {!auth ? (
        <>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to={"/signin"} />} />
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment/:id" element={<Send />} />
          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </>
      )}
    </Routes>
  );
};

export default App;
