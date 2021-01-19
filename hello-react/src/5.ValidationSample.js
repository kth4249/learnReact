// 5.1.2 예제 컴포넌트 생성

import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    // 5.2.3.1 input에 ref달기
                    ref={(ref) => this.input = ref}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

/*
state를 사용하여 우리에게 필요한 기능을 구현했지만
다음과 같은 기능은 state만으로 해결할 수 없음.
- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등
이 때는 어쩔 수 없이 DOM에 직접적으로 접근해야 하는데, 이를 위해 ref를 사용함.
*/

export default ValidationSample;