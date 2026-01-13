import React from "react";

const App = () => {
  function formHandeler(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandeler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>Done</button>
      </form>
    </div>
  );
};

export default App;
