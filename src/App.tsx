import React from "react";
import ProfileInfo from "./components/profileInfo";
import SearchBox from "./components/searchBox";

function App() {
  return (
    <div className="container-wrap">
      <main>
        <header className="app-header">
          <h2>Devfinder</h2>
          <button className="btn switch-mode">Dark</button>
        </header>
        <SearchBox/>
        <ProfileInfo/>
      </main>
    </div>
  );
}

export default App;
