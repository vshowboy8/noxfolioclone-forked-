import "./App.css";
import Navbar from "./Navbar";
import GlobalStyle from "./globalStyles";
import Landingpage from "./Landingpage";
import "./index.css";
import About from "./About";
import Bglines from "./Bglines";

function App() {
  return (
    <>
      <div className="parent">
        <Bglines />
        <GlobalStyle />
        <Navbar />
        <Landingpage />
        <About />
      </div>
    </>
  );
}

export default App;
