import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="flex bg-white pl-8 pr-2 py-1 rounded-3xl shadow-md ">
      <input placeholder="Bạn cần mua gì?" className="flex-auto" />
      <button className="bg-teal-800 hover:bg-teal-500 text-white p-2 rounded-xl shadow-xl">
        <BiSearch></BiSearch>
      </button>
    </div>
  );
}

export default SearchBar;
