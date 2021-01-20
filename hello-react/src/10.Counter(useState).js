import React, { useState } from 'react';

// 8.1 useState
// useState는 가장 기본적인 Hook이며 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 함
// 함수형 컴포넌트에서 상태를 관리해야 한다면 이 Hook을 사용하면 됨.
const Counter = () => {
    const [value, setValue] = useState(0);

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Counter;