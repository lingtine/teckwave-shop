function OptionFilter({ name, option, onSelected, selected }) {
  const handleSelected = () => {
    onSelected({ ...selected, [name]: option.label });
  };
  return (
    <li className="border-t border-t-gray-600">
      <div className="flex items-center pl-3 " onClick={handleSelected}>
        <input
          id={`list-radio-${option.label}`}
          type="radio"
          value=""
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor={`list-radio-${option.label}`}
          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {option.label}
        </label>
      </div>
    </li>
  );
}

export default OptionFilter;
