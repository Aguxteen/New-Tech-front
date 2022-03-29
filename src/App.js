import logo from './logo.svg';
import {Container, Button} from "@material-ui/core"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './Components/contacto';
import Inicio from './Components/Inicio';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
