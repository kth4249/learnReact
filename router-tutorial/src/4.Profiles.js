import { Link, Route } from "react-router-dom"
import Profile from "./3.Profile"
import WithRouterSample from "./6.WithRouterSample"


// 13.5 서브 라우터
const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    )
}

export default Profiles;