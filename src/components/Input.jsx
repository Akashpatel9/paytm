function Input({ label, name, placeholder, type }) {
  return (
    <div className="mt-4">
      <label className="font-semibold text-lg">{label}</label>
      <br />
      <input className="border-2 border-gray-300 p-2 rounded-lg w-full" type={type} placeholder={placeholder} name={name} />
    </div>
  );
}

export default Input;
