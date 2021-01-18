import React, { Component, useState } from 'react';

// class EventPractice extends Component {
//     // render() {
//     //     return (
//     //         <div>
//     //             <h1>이벤트 연습</h1>
//     //             {/* 4.2.2 onChange 이벤트 핸들링하기 */}
//     //             <input 
//     //                 type="text"
//     //                 name="message"
//     //                 placeholder="아무거나 입력해 보세요"
//     //                 onChange={
//     //                     (e) => {
//     //                         console.log(e);
//     //                     }
//     //                 }
//     //             />
//     //         </div>
//     //         // 브라우저의 콘솔에 이벤트 객체가 나타남. 여기서 콘솔에 기록되는 e 객체는 
//     //         // Syntheticevent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체임.
//     //         // 네이티브 이벤트와 인터페이스가 같으므로
//     //         // 순수 자바스크립트에서 HTML 이벤트를 다룰 때와 동일하게 사용
//     //         // 그러나 SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면
//     //         // 이벤트가 초기화되므로 정보를 참조할 수 없음.
//     //         // 비동기적으로 이벤트 객체를 참고할 일이 있다면, e.persist() 함수를 호출
//     //     )
//     // }

//     // 4.2.2.2 state에 input값 담기
//     // state = {
//     //     message: ''
//     // }

//     // render() {
//     //     return (
//     //         <div>
//     //             <h1>이벤트 연습</h1>
//     //             <input
//     //                 type="text"
//     //                 name="message"
//     //                 placeholder="아무거나 입력해 보세요"
//     //                 value={this.state.message}
//     //                 onChange={
//     //                     (e) => {
//     //                         this.setState({
//     //                             message: e.target.value
//     //                         })
//     //                     }
//     //                 }
//     //             />

//     //             {/* 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정 
//     //                 우리가 입력한 값이 state에 잘 들어갔는지 검증.
//     //             */}
//     //             <button onClick={
//     //                 () => {
//     //                     alert(this.state.message);
//     //                     this.setState({
//     //                         message: ''
//     //                     })
//     //                 }
//     //             }>확인</button>
//     //         </div>
//     //     )
//     // }

//     // 4.2.3 임의 메서드 만들기
//     // 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달하는 방식이 아닌
//     // 미리 준비한 함수를 전달하는 방법이 가독성이 높음.
//     state = {
//         username: '',
//         message : ''
//     }

//     constructor(props) {
//         super(props)

//         // 함수가 호출될 때 this는 호출부에 따라 정의되므로, 클래스의 임의 메서드가 특정 HTML 요소의
//         // 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버림.
//         // 따라서 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩 하는 작업이 필요함.
//         this.handleChange= this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     // handleClick() {
//     //     alert(this.state.message);
//     //     this.setState({
//     //         username: '',
//     //         message: ''
//     //     })
//     // }

//     // 아래처럼 화살표 함수로 선언하면 constructor에서 이벤트 바인딩을 하지 않아도 됨.
//     handleClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         })
//     }

//     // 4.2.5 onKeyPress 이벤트 핸들링
//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input 
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input 
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 주세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         )
//     }

// }


// 위 코드를 4.3 함수형 컴포넌트로 구현해보기
const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ": " + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 주세요."
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;