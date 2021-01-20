import React, { useEffect, useState } from "react";

// 8.1.1 useState를 여러 번 사용하기
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 8.2 useEffect
  // 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  // 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({
      name,
      nickname,
    });
  });
  // 8.2.1 마운트될 때만 실행하고 싶을 때는 함수의 두 번쨰 파라미터로 비어 있는 배열을 넣으면 됨.
  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);
  // 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때
  /** 클래스형 컴포넌트에서의 예)
   *  componentDidUpdate(prevProps, prevState) {
   *    if(prevProps.value !== this.props.value) {
   *        doSomething();
   *    }
   * }
   */
  // useEffenct에서 사용 시 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됨.
  useEffect(() => {
      console.log(name);

      // 8.2.3 뒷정리하기
      // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
      // useEffect에서 뒷정리(cleanup)함수를 반환해 주어야함.
      console.log('effect');
      return () => {
          console.log('cleanup');
          console.log(name);
      }
  }, [])

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
