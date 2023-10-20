import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Formulir from './pages/Formulir';
import Formulir2 from './pages/Formulir2';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/formulir' element={<Formulir />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/formulir2' element={<Formulir2 />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
