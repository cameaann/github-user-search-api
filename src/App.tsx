import React from "react";

function App() {
  return (
    <div className="container-wrap">
      <main>
        <header className="app-header">
          <h2>Devfinder</h2>
          <button className="btn switch-mode">Dark</button>
        </header>
        <div className="search-box"></div>
        <div className="result-box"></div>
      </main>
    </div>
  );
}

export default App;
