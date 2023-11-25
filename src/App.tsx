import React from "react";

import { DarkModeProvider } from "./DarkModeContext";
import Main from "./components/main";
function App() {


  return (
    <DarkModeProvider>
      <Main/>
    </DarkModeProvider>

  );
}

export default App;
