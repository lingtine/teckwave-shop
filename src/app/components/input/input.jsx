function Input({ label, required, type = "text", ...props }) {
  return (
    <div className="relative rounded-md border">
      <input
        type={type}
        id={`input_${label}`}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none  focus:border-primary peer"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={`input_${label}`}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
        {required && <span className="text-secondary-3">*</span>}
      </label>
    </div>
  );
}

export default Input;
