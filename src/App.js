import "./App.scss";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import Lists from "./Components/Lists/Lists";
function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <a href="#">Logo</a>
        <ul className="App-nav-list">
          <li>Regiser</li>
          <li>Clients</li>
        </ul>
      </nav>
      <div className="body-sect">
        {/* <Register /> */}
        <Lists />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
