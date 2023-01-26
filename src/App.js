import { Route,Routes } from 'react-router';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import FrontEnd from './pages/FrontEnd';
import Graphic from './pages/Graphic';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/frontend' element={<FrontEnd/>}/>
        <Route path='/graphic' element={<Graphic/>}/>
      </Routes>
    </div>
  );
}

export default App;
