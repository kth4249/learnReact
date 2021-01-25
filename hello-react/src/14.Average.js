import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // 8.6 useRef
  // useRef는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌.
  const inputEl = useRef(null);

  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };
  //   const onInsert = () => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };

  // 8.5 useCallback
  // useMemo와 상당히 비슷한 함수로, 주로 렌더링 성능을 최적화해야 하는 상황에서 사용
  // 이 Hoook을 사용하면 만들어 놨던 함수를 재사용할 수 있음.
  // 위에 Average 컴포넌트에서 onChange와 onInsert라는 함수를 선언하였는데
  // 이렇게 선언하면 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하게 되어
  // 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 최적화하는 것이 좋음.
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성
  // 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라마터 안에 포함해야 함.
  // - 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를
  //    반드시 넣어줘야 함.

  // 8.4 useMemo
  // useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있음.

  // 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 getAverage 함수가 호출되어 낭비가 발생
  //   -> useMemo Hook을 사용하면 이러한 작업을 최적화 할 수 있음.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}/>
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
  );
};

export default Average;
