// 3.4.2.2 userState 사용하기
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  // 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      
      <button style={{color:'red'}} onClick={() => setColor('red')}>빨간색</button>
      <button style={{color:'green'}} onClick={() => setColor('green')}>초록색</button>
      <button style={{color:'blue'}} onClick={() => setColor('blue')}>파란색</button>
    </div>
  );
};

export default Say;