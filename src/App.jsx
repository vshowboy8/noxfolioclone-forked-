import "./App.css";
import Navbar from "./Navbar";
import GlobalStyle from "./globalStyles";
import Landingpage from "./Landingpage";
import "./index.css";
import About from "./About";
import Bglines from "./Bglines";
import Hidenbar from "./Hidenbar";
import { BodyClassProvider } from './BodyClassContext';

function App() {
  return (
    <>
      <BodyClassProvider>
        <div className="parent">
          <div class="form-back-drop"></div>
          <Hidenbar />
          <Bglines />
          <GlobalStyle />
          <Navbar />
          <Landingpage />
          <About />
        </div>
      </BodyClassProvider>
    </>
  );
}

export default App;
