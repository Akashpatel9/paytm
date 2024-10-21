function BottomWarning({warning, to}) {
  return (
    <div className="w-full flex items-center justify-center gap-2 font-semibold">{warning} <span className="underline">{to}</span> </div>
  )
}

export default BottomWarning