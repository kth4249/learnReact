import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./1.Home";
import About from "./2.About";
import Profile from "./3.Profile";
import Profiles from "./4.Profiles";
import HistorySample from "./5.HistorySample";

function App() {
  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">홈</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">소개</Link>
  //       </li>
  //     </ul>
  //     <hr />
  //     <Route path="/" component={Home} exact="true"/>
  //     <Route path="/about" component={About} />
  //   </div>
  // );

  // return(
  //   <div>
  //     <Route path="/" component={Home} exact={true} />
  //     <Route path={["/about", "/info"]} component={About}/>
  //     {/* 여러 경로에서 같은 컴포넌트를 보여줄 수 있음. */}
  //   </div>
  // )

  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">홈</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">소개</Link>
  //       </li>
  //       <li>
  //         <Link to="/profile/velopert">velopert 프로필</Link>
  //       </li>
  //       <li>
  //         <Link to="/profile/gildong">gildong 프로필</Link>
  //       </li>
  //     </ul>
  //     <hr />
  //     <Route path="/" component={Home} exact={true} />
  //     <Route path={['/about', '/info']} component={About} />
  //     <Route path="/profile/:username" component={Profile} />
  //   </div>
  // )

  // 13.5 서브 라우터
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      {/* 13.6.3 Switch 
      Switch 컴포넌트는 여러 Route를 감싸서 그 중 일치하는
      단 하나의 라우트만을 렌더링시켜 줍니다. */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route 
          render={({location}) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
