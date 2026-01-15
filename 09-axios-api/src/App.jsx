import axios from "axios";
import UserCard from "./components/UserCard";
import { useState } from "react";
const App = () => {
  const [allData, setallData] = useState([]);
  const getData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setallData(response.data);
  };
  return (
    <>
      <div style={{ padding: "40px" }}>
        <button onClick={getData}>GetData</button>
        <div className="all-card">
          {allData.map((elem) => {
            console.log(elem);
            return (
              <div>
                <UserCard key={elem.id} user={elem} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
