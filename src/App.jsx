import {Navbar, Home, Skills, Projects, Footer, Links} from "./components";

function App() {
  return (
    <>
    <header>
    <Navbar/>
    </header>
    <main>
      <section id="home">
      <Home/>
      </section>
      <section id="skills">
      <Skills/>
      </section>
      <section id="projects">
      <Projects/>
      </section>
      <section>
        <Links/>
      </section>
    </main>
    <footer>
     <Footer/>
    </footer>
    </>
  );
}

export default App;
