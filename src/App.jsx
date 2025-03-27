import { useState } from "react";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" px-4">
      <AllRoutes />
    </div>
  );
}

export default App;
