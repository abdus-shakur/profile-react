import logo from './logo.svg';
import HomePage from './page/HomePage'
import {BrowserRouter as Router,Route} from 'react-router-dom'
// import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage}></Route>
    </Router>
  );
}

export default App;
