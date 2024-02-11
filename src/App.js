import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <HomeContainer/>
    </div>
  );
}

export default App;
