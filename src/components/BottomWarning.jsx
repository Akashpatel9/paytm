import { Link } from "react-router-dom"

function BottomWarning({warning, to}) {
  return (
    <div className="w-full flex items-center justify-center gap-2 font-semibold">{warning} <Link to={to==="Sign up" ? "/signup" : "/signin"} className="underline">{to}</Link> </div>
  )
}

export default BottomWarning