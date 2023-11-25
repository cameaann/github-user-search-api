import React from "react";
import Icon from "./Icon";

function SearchBox() {
  return (
    <div className="search-container">
      <div className="search-box">
        <Icon
          className="item-icon icon-search"
          icon="search"
          size={16}
          color="#4b6a9b"
        ></Icon>
        <input className="input-search" type="text" placeholder="Search Github username" />
      </div>

      <button className="searchBtn">Search</button>
    </div>
  );
}

export default SearchBox;
