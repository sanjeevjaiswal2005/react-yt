import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <div className="parent">
        <Card
          user="Sanjeev"
          age={21}
          img="https://images.unsplash.com/photo-1603117682462-fc0fa5046a9d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          user="Priyanshu"
          age={22}
          img="https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          user="Prince"
          age={23}
          img="https://plus.unsplash.com/premium_photo-1737405816020-4217919dffc8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default App;
