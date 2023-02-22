import logo from './logo.svg';

import './App.css';
import {Home} from './Home';
import {Academics} from './Academics';
import {Research} from './Research';
import{Chat} from './Chat';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter,Route,Routes,NavLink, Switch} from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className ="d-flex justify-content-center m-3">
        University of Colombo
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <u1 className="navbar-nav">
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/academics">
              Academics
              </NavLink>
            </li>
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/research">
              Research
              </NavLink>
            </li>
            <li className ="nav-item-m-1">
              <NavLink className="btn btn-ligt btn-outline-primary" to="/chat">
              Chat
              </NavLink>
            </li>
          </u1>

      </nav>
       <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/academics' component={ Academics}/>
        <Route path='/research' component={Research}/>
        <Route path='/chat' component={Chat}/>
        </Switch>
      
      
    </div>

    
    </BrowserRouter>
  );
}

export default App;
