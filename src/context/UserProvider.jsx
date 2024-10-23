import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

function UserProvider({ children }) {
  
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const nevigate = useNavigate()


  const { auth, logout } = useContext(AuthContext);


  const token = localStorage.getItem("token");
  
  const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    headers: {  
      authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    if (auth) {
      getUsers("");
      getUser();
    }
  }, [auth, token]);


  const getUser = async () => {
    try {
      const {data} = await instance.get("user/userDetails");
      setUserDetails(data.data)
    } catch (error) {
      if(error.status == 401){
        logout()
      }
      console.log(error);
    }
  };



  
  const getUsers = (filter) => {
    try {
      instance.get(`user?filter=${filter}`).then((res) => {
        setUsers(res.data.data);
      });
    } catch (error) {
      if(error.status == 401){
        logout()
      }
      console.log(error);
    }
  };
  
  
  const sendmoney = async (data) => {
    try {
      const res = await instance.put("account/transaction", data);
      nevigate('/dashboard')
      getUser();
    } catch (error) {
      if(error.status == 401){
        logout()
      }
      console.log(error);
    }
  };


  return (
    <UserContext.Provider value={{ users, getUsers ,userDetails, sendmoney}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
