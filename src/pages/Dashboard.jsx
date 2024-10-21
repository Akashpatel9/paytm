import { useContext } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import User from "../components/User"
import { UserContext } from "../context/UserProvider"


const Dashboard = () => {

  const {userDetails} = useContext(UserContext);
  return userDetails&&(
    <div className="">
      <Appbar user={userDetails.userDetails}/>
      <Balance balance={userDetails.accoutDetails.balance}/>
      <User/>
    </div>
  )
}

export default Dashboard