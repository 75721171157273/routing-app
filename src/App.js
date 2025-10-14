import { Outlet } from "react-router-dom";
import NavBar from "./components/navbarComponent/NavBar";

function App() {
  return (
    <div >
      <NavBar/>
      <Outlet/>
      {/* <Outlet /> is used to render child routes inside a parent route component. */}
    </div>
  );
}
export default App;
