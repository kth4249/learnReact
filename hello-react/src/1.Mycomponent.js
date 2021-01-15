// 교재 3-2 첫 컴포넌트 생성
import React, { Component } from 'react';
import PropTypes from "prop-types";

// const Mycomponent = () => {
    //     return <div>나의 새롭고 멋진 컴포넌트</div>;
    // }
    
    // 모듈 내보내기(export)
    // 이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 Mycomponent 클래스를 불러오도록 설정함
    
// [props]
// 3.3.1 JSX 내부에서 props 렌더링
// const Mycomponent = (props) => {
//   return <div>
//       안녕하세요, 제 이름은 {props.name} 입니다. <br />

//       {/* 3.3.4 태그 사이의 내용을 보여 주는 children */}
//       children 값은 {props.children} 입니다.
//       </div>;
// };

// 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기.
// const Mycomponent = (props) => {
//   const { name, children, favoriteNumber } = props;
//   return (
//     <div>
//       안녕하세요 제 이름은 {name} 입니다. <br />
//       children 값은 {children} 입니다.

//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };


// 3.3.7 클래스형 컴포넌트에서 props 사용하기
// 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 됨.
// defaultProps와 propTyps는 동일한 방법으로 설정
class Mycomponent extends Component {
    // 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법도 있음
    static defaultProps = {
        name : '기본 이름'
    };
    static propTyps = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name} 입니다. <br />
                children 값은 {children} 입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        )
    }
}

// 3.3.3 props 기본값 설정: defaultProps
Mycomponent.defaultProps = {
  name: "기본 이름",
};

// 3.3.6 propsTypes를 통한 props 검증
// 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때 사용

// 코드 상단에 'import PropTyps from "prop-types";' 를 사용하여 불러와야 함.

Mycomponent.propTypes = {
  name: PropTypes.string,

  // 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정
  favoriteNumber: PropTypes.number.isRequired
  // 3.3.6.2 PropTypes 종류 - 교재 참고
};


/** defaultProps와 propsTypes는 꼭 사용해아 하나요?
 * 컴포넌트의 필수 사항은 아니므로 꼭 사용할 필요는 없음. 그러나 다른 개발자와 협업한다면
 * 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아질 수 있음.
 */


// 이렇게 설정하면 name 값은 무조건 문자열(string)형태로 전달해야 된다는 것을 의미합니다.

export default Mycomponent;
