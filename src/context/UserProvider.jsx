import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const UserContext = createContext(null);

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  
  const { auth } = useContext(AuthContext);

  const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    headers: {  
      authorization: `Bearer ${auth}`,
    },
  });

  useEffect(() => {
    if (auth) {
      getUsers("");
      getUser();
    }
  }, [auth]);


  const getUser = async () => {
    try {
      const {data} = await instance.get("user/userDetails");
      setUserDetails(data.data)
    } catch (error) {
      console.log(error);
    }
  };



  
  const getUsers = (filter) => {
    try {
      instance.get(`user?filter=${filter}`).then((res) => {
        setUsers(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const sendmoney = async (data) => {
    try {
      const res = await instance.put("account/transaction", data);
      console.log(res);
      
    } catch (error) {
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
