import React, { useReducer } from "react";
import useInputs from "./15.useInput";

// 8.3.2 인풋 상태 관리하기
// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //     name: '',
  //     nickname: ''
  // });
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  // const onChange = e => {
  //     dispatch(e.target);
  // }

  // 8.7 커스텀 Hooks 만들기

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
