import "./App.css";
import Navbar from "./Navbar";
import GlobalStyle from "./globalStyles";
import Landingpage from "./Landingpage";
import "./index.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container-1440">
        <Navbar />
        <Landingpage />
      </div>
    </>
  );
}

export default App;
