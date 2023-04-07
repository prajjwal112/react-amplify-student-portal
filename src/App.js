import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

const App=()=>{
return(
  <Router>
    <Routes>
      <Route exact path='/' Component={LoginPage} />
    </Routes>
  </Router>
)
}

export default App;
