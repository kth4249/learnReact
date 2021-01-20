import React, { useState } from 'react';

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    const[names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},
    ]);
    
    // 6.4.2 데이터 추가 기능 구현하기
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    // 6.4.3 데이터 제거 기능 구현하기
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => 
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
        )

    // const nameList = names.map(name => <li>{name}</li>);

    // key 를 추가하기 위해 위의 코드를 수정
    // key란? 데이터베이스의 index와 비슷함.
    // 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 빠르게 알아내려고 사용
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>)
    // 고유한 값이 없을 때만 index를 key로 사용해아 함.
    // index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못함. 
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )

}

export default IterationSample;