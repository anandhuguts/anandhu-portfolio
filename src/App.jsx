import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import Introduction from "./components/pages/Introduction";
import Overview from "./components/pages/Overview";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Introduction2 from "./components/pages/Introduction copy";
import Skills2 from "./components/pages/Skills copy 2";

function App() {
  return (
    <>
      <Navigation />

      <Main>
        <Introduction2 />
        <Overview />
        <Skills2 />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </Main>
    </>
  );
}

export default App;
