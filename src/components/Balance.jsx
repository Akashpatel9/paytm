function Balance({balance}) {
  return (
    <div className="p-5 text-2xl font-extrabold">
        Your balance: <span className="font-medium">Rs {balance}</span>
    </div>
  )
}

export default Balance