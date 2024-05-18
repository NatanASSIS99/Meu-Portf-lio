
import './App.css';
import Navbar from './componenetes/section/Navbar';
import Presentation from './componenetes/section/Presentation'
import Skills from './componenetes/section/Skills';
import Projects from './componenetes/section/Projects';
import Footer from './componenetes/section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
   

    </div>
  );
}

export default App;
