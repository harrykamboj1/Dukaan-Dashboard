import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import NavBar from "./components/NavBar.jsx";
import Body from "./components/Body.jsx";

function App() {
  return (
    <div className="bg-background flex relative ">
      <Sidebar />
      <div className="w-full">
        <NavBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
