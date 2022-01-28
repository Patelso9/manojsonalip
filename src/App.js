import { BrowserRouter as Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home';





function App() {
  return (
      <div className="App">
      <Route exact path="/"> <Home /> </Route>

      </div>
  );
}

export default App;
