import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Dumb from './Components/Dumb'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dumb' element={<Dumb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
