import logo from "./logo.svg";
import "./App.css";
import Mycomponent from "./1.Mycomponent";
import Counter from "./2.Counter";
import Say from "./3.Say";
import EventPractice from "./4.EventPractice";
import ValidationSample from "./5.ValidationSample";
import ScrollBox from "./6.ScrollBox";
import { Component, useState } from "react";
import IterationSample from "./7.IterationSample";
import LifeCycleSample from "./8.LifeCycleSample";
import ErrorBoundary from "./9.ErrorBoundary";
import Counter2 from "./10.Counter(useState)";
import Info from "./11.Info";
import Counter3 from './12.Counter(useReducer)';
import Info2 from "./13.Info(useReducer)";
import Average from "./14.Average";
// 모듈 불러오기(import)

// const App = () => {
//   // 3.3.2 컴포넌트를 사용할 때 props 값 지정하기
//   // return <Mycomponent name="Taehan" />;

//   // 3.3.3 props 기본값 설정: defaultProps
//   // return <Mycomponent />;

//   // 3.3.4 태그 사이의 내용을 보여 주는 children
//   // return <Mycomponent name={3}>리액트</Mycomponent>
//   // name을 숫자로 전달하여 개발자 도구 console에 에러메시지가 출력됨
//   // index.js:1 Warning: Failed prop type:
//   // Invalid prop `name` of type `number` supplied to `Mycomponent`, expected `string`.

//   // return <Mycomponent name="React" favoriteNumber={1}>리액트</Mycomponent>
//   // return <Counter />

//   // return <Say />

//   // 4.2.1 컴포넌트 생성 및 불러오기
//   // return <EventPractice />

//   // 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링
//   // return <ValidationSample />

// };

// class App extends Component {
//   render() {
//     return (
//         // 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링
//       // <div>
//       //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//       //   <button onClick={() => this.scrollBox.scrollToBottom()}>
//       //     맨 밑으로
//       //   </button>
//       // </div>

//       // 6.2.2
//       <IterationSample />
//     );
//   }
// }

// 7.3.2 App 컴포넌트에서 예제 컴포넌트 사용
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000'
//   }

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     })
//   }

//   render() {
//     return(
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     )
//   }
// }


const App = () => {
  // return <Counter2 />
  // return <Info />

  // 8.2.3 뒷정리하기
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button 
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}>
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // )

  // return <Counter3 />
  return <Info2 />
  // return <Average />
}

export default App;
