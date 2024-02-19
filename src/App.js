import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import ServicesContainer from './containers/ServicesContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <HomeContainer/>
      <ServicesContainer/>
    </div>
  );
}

export default App;
