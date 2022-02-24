import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Items from './components/paginas/Items'
import Zamnature from './components/paginas/Zamnature';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/Zamnature' component={Zamnature}/>
          <Route path='/Items' component={Items}/>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
