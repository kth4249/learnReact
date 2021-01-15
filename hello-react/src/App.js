import logo from "./logo.svg";
import "./App.css";
import Mycomponent from "./1.Mycomponent";
import Counter from "./2.Counter";
// 모듈 불러오기(import)


const App = () => {
  // 3.3.2 컴포넌트를 사용할 때 props 값 지정하기
  // return <Mycomponent name="Taehan" />;

  // 3.3.3 props 기본값 설정: defaultProps
  // return <Mycomponent />;

  // 3.3.4 태그 사이의 내용을 보여 주는 children
  // return <Mycomponent name={3}>리액트</Mycomponent>
  // name을 숫자로 전달하여 개발자 도구 console에 에러메시지가 출력됨
  // index.js:1 Warning: Failed prop type:
  // Invalid prop `name` of type `number` supplied to `Mycomponent`, expected `string`.

  // return <Mycomponent name="React" favoriteNumber={1}>리액트</Mycomponent>
  return <Counter />
};

export default App;
