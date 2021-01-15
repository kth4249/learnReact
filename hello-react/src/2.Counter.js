// 3.4.1 클래스형 컴포넌트의 state
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초기 값 설정하기
    this.state = {
      number: 0,
    
      // 3.4.1.1 state 객체 안에 여러 값이 있을 때
      fixedNumber: 0,
    };
  }

  // 3.4.1.2 state를 contructor에서 꺼내기
  // contructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있음.
  state = {
      number: 0,
      fixedNumber: 0
  }

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
            //3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
            // this.setState({number: this.state.number + 1})
            // - 이렇게 하여도 카운트가 2개씩올라가지 않음
            // setState를 사용한다고해서 state값이 바로 바뀌지 않기 때문
            // 따라서 아래와 같이 작성해야함
            this.setState(prevState => ({ // prevState : 기존 상태, props : 현재 지니고 있는 props (여기선 생략)
                number: prevState.number + 1
            }),
            // 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기
            // setState의 두 번째 파라미터로 콜백(callback)함수를 넘겨서 작업을 처리할 수 있음
            () => {
                console.log("방금 setState가 호출되었습니다");
            })
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
