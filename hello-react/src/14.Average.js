import React, { useMemo, useState } from "react";

// 8.4 useMemo
// useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있음.
const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
  };
  
  // 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 getAverage 함수가 호출되어 낭비가 발생
//   -> useMemo Hook을 사용하면 이러한 작업을 최적화 할 수 있음.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
      <div>
          <input value={number} onChange={onChange} />
          <button onClick={onInsert}>등록</button>
          <ul>
              {list.map((value, index) => (
                  <li key={index}>{value}</li>
              ))}
          </ul>
          <div>
              {/* <b>평균값:</b> {getAverage(list)} */}
              <b>평균값:</b> {avg}
          </div>
      </div>
  )
};

export default Average;