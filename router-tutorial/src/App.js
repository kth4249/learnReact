import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './1.Home';
import About from './2.About';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact="true"/>
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
