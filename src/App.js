import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import ServicesContainer from './containers/ServicesContainer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="" element={HomeContainer}/>
     <Route path="/services" element={<ServicesContainer/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
