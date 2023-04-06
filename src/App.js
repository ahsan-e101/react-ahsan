import './App.css';
import Excercise1 from './Excercise1';
import Excercise2 from './Excercise2';
import Excercise3 from './Excercise3';
import Excercise4 from './Excercise4';
import AboutUs from './AboutUs';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='Excercise1'> Excercise1 </Link>
        <Link to='Excercise2'> Excercise2 </Link>
        <Link to='Excercise3'> Excercise3 </Link>
        <Link to='Excercise4'> Excercise4 </Link>
        <Link to='about-us'> About Us </Link>
      </nav>


      <Excercise1 />

      <Routes>
        <Route path='/Excercise1' elemment={<Excercise1/>} />
        <Route path='/Excercise2' elemment={<Excercise2/>} />
        <Route path='/Excercise3' elemment={<Excercise3/>} />
        <Route path='/Excercise4' elemment={<Excercise4/>} />
        <Route path='/about-us' elemment={<AboutUs/>} />
      </Routes>



    </div>
  );
}

export default App;
