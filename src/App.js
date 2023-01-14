import './App.css';
import Hero from './components/Hero/Hero';
import Prglan from './components/Prglan/Prglan';
import CompCode from './components/CompCode/CompCode';

function App() {
  return (
    <div id="app" style={{ backgroundImage: "url('bg3.jpg')" }}>
      
        <Hero/>
        <Prglan/>
        <CompCode/>
    </div>  
  );
}

export default App;
