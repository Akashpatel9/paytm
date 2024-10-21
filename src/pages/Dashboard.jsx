import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import User from "../components/User"

const Dashboard = () => {
  return (
    <div className="">
      <Appbar/>
      <Balance balance={"10,000"}/>
      <User/>
    </div>
  )
}

export default Dashboard