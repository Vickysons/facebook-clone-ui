import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Page from "./Components_one/Page/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feeds from "./Components/Feeds/Feeds";
import Widget from "./Components/Widget/Widget";

function App() {
  return (
    <>
      <div className="App">
        {/* <Page /> */}
        <Navigation />
        <div className="home_container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="feeds">
            <Feeds />
          </div>
          <div className="widget">
            <Widget />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
