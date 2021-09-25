import { AuthContext } from "./Context/AuthContext";
import React from "react";

function App() {
  const user = React.useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
