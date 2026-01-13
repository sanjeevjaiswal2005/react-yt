import { useState } from "react";

import Washroom from "./components/Washroom";

const App = () => {
  const [gender, setGender] = useState("Male");
  function changeUser() {
    if (gender == "Male") setGender("Female");
    else if (gender == "Female") setGender("Other");
    else setGender("Male");
  }
  return (
    <div>
      <div className="pairent">
        <h1>{gender}</h1>
      </div>
      <button onClick={changeUser}>Change Gender</button>
      <Washroom user={gender} />
    </div>
  );
};

export default App;
