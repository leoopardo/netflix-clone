import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

export function Search() {
  const [Search, setSearch] = useState("");
  const [isInputHover, setIsInputHover] = useState(false);

  function onSearchChange(e: any) {
    setSearch(e.target.value);
  }
  return (
    <form
      className="search"
      onMouseOver={() => setIsInputHover(true)}
      onMouseOut={() => setIsInputHover(false)}
    >
      <input
        type="text"
        placeholder="Search"
        className={isInputHover ? "search-ipt-hover" : "search-ipt"}
        onChange={onSearchChange}
      />
      <button className="search-btn">
        <SearchIcon fontSize="large" />
      </button>
    </form>
  );
}
