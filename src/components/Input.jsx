function Input({ label, name, placeholder, type, onchange, value }) {
  return (
    <div className="mt-4">
      <label className="font-semibold text-lg">{label}</label>
      <br />
      <input onChange={onchange} value={value} className="border-2 border-gray-300 p-2 rounded-lg w-full" type={type} placeholder={placeholder} name={name} />
    </div>
  );
}

export default Input;
