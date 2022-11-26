import './App.css';
import { RouterProvider } from "react-router-dom";
import router from './Route/Routes';

function App() {
  const Swal = require("sweetalert2");

  return (
    <div className="max-w-[1440px] px-4 mx-auto border border-blue-400 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
