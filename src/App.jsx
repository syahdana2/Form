import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Formulir from './pages/Formulir';
import Formulir2 from './pages/Formulir2';
import TodoList from './pages/TodoList';
import ImmutableState from './pages/ImmutableState';
import ImmutableArray from './pages/immutableArray';
import Hero from './pages/Hero';
import Project from './pages/Project';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/formulir' element={<Formulir />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/formulir2' element={<Formulir2 />}/>
        <Route path='/hero' element={<Hero />}/>
        <Route path='/todolist' element={<TodoList />}/>
        <Route path='/state' element={<ImmutableState />}/>
        <Route path='/array' element={<ImmutableArray />}/>
        <Route path='/project' element={<Project />}/>
      </Routes>
    </Router>
  );
}

export default App;
