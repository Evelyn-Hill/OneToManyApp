import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Eves really cool one-to-many</h1>
      <p>No need to login, just leave your name and your message!</p>
      <button onClick={() => setCount(count + 1)}> Create Post </button>
      <p>{count}</p>
      <hr />
    </div>
  );
}

export default Header;
