import { Link, NavLink, Route } from "react-router-dom"
import Profile from "./3.Profile"
import WithRouterSample from "./6.WithRouterSample"


// 13.5 서브 라우터
const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    {/* <Link to="/profiles/velopert">velopert</Link> */}
                    {/* 13.6.4 NavLink
                        NavLink는 Link와 비슷하지만 링크가 활성화 되었을 때 특정 스타일
                        혹은 CSS 클래스를 적용할 수 있는 컴포넌트임.
                    */}
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert">
                        velopert
                    </NavLink>
                </li>
                <li>
                    {/* <Link to="/profiles/gildong">gildong</Link> */}
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">
                        gildong
                    </NavLink>
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