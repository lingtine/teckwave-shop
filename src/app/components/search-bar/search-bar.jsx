import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="flex justify-center pl-4 pr-2 py-1 bg-secondary border rounded-md">
      <input
        placeholder="what are you looking for?"
        className="flex-auto text-black bg-transparent"
      />
      <button className="text-[28px]">
        <BiSearch></BiSearch>
      </button>
    </div>
  );
}

export default SearchBar;
