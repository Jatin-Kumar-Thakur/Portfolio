import "./App.css";
import AboutMe from "./Component/AboutMe/AboutMe";
import Contact from "./Component/ContactUs/Contact";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/Header/NavBar";
import Home from "./Component/Home/Home";
import Skill from "./Component/Skill/Skill";
import ProjectUnit from "./Component/Projects/ProjectUnit";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <br />
      <AboutMe />
      <br />
      <Skill />
      <br />
      <ProjectUnit /> 
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
