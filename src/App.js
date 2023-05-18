import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className='main'>
            <Home/>
            <About/>
            <Skill/>
            <Contact/>
            <Footer/>
        </main>
    </div>
  );
}

export default App;
