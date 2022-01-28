import { BrowserRouter as Route } from 'react-router-dom';
import './App.css';

import Home from './components/Pages/Home';

function App() {
  return (
      <div className="App">
      <h1>Hello World</h1>
        <Route exact path="/"> <Home /> </Route>

      </div>
  );
}

export default App;
