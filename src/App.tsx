import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //hook
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <>
      {/* <div>{count}</div> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>
    </>
  );
}

export default App;
