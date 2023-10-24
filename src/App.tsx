import React from "react";
import ProfileInfo from "./components/profileInfo";
import SearchBox from "./components/searchBox";
import Icon from "./components/Icon";

function App() {
  return (
    <div className="container-wrap">
      <main>
        <header className="app-header">
          <h2 className="app-header-title">devfinder</h2>
          <button className="btn">
          <span className="btn-word">Dark</span>
          <Icon className="item-icon icon-moon" icon="moon" size={16} color="#4b6a9b"></Icon>
          </button>
        </header>
        <SearchBox/>
        <ProfileInfo/>
      </main>
    </div>
  );
}

export default App;
