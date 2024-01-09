import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="main-container">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
