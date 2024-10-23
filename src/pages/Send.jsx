import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Send() {
  const [amount, setAmount] = useState(0);
  const [recieverDetails, setRecieverDetails] = useState("");
  const { id } = useParams();
  const { sendmoney, users } = useContext(UserContext);

  function setNameHandler() {
    const res = users.filter((user) => {
      return user._id == id;
    });
    setRecieverDetails(res[0]);
  }

  useEffect(() => {
    setNameHandler();
  }, []);

  function submitHandler() {
    if (amount <= 0) {
      return;
    }
    const obj = {
      to: id,
      amount,
    };
    sendmoney(obj);
    setAmount(0)
  }

  return (
    recieverDetails && (
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
          <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl text-white">A</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  {recieverDetails.username}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Amount (in Rs)
                  </label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="amount"
                    placeholder="Enter amount"
                    onChange={(e) => setAmount(e.target.value)}
                    autoFocus
                    min={1}
                  />
                </div>
                <button
                  onClick={submitHandler}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                >
                  Initiate Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Send;
