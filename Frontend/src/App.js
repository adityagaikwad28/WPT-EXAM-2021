//import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState("");

  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [msg, setmsg] = useState("");

  const [list, setList] = useState("");

  const handleMsg = (e) => {
    setmsg(e.target.value);
  };

  const addMsg = async () => {
    if (msg == "") {
      alert("validation fails");
      return;
    }
  };

  return (
    <div>
      <div>
        <h2 className="bg-dark text-light p-4">MyChatApp</h2>
      </div>
      <div className="d-flex mx-5">
        <input
          className="form-control form-control-lg mb-1 w-75 border-2 border-info"
          type="text"
          value={msg}
          onchange={handleMsg}
          placeholder="Letus chat here..."
        />
        <input
          className="mx-2 w-25"
          type="button"
          name=""
          id=""
          value="SEND"
          onClick={addMsg}
        />
      </div>
      <div></div>
    </div>
  );
}
