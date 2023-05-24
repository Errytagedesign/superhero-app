import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import HerosIndex from './pages/HerosIndex';
import HerosShow from './pages/HerosShow';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Nav />
            <h1>Superhero App</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hero-index' element={<HerosIndex />} /> 
                <Route path='/powerstats'>
                  <Route path='symbol' element={<HerosShow />} />

                </Route>
            </Routes>
        </div>
    );
  
}

export default App;
