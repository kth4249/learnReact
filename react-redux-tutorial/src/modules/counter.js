import { createAction, handleActions } from 'redux-actions'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 17.6.1 redux-actions
// redux-acitons를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있음
// 리듀서를 작성할 때도 switch/case문이 아닌 handleActions라는 함수를 사용해서
// 각 액션마다 업데이트 함수를 설정하는 형식으로 작성할 수 있음.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1}),
    [DECREASE]: (state, action) => ({ number: state.number - 1}),
  },
  initialState
)

export default counter;
