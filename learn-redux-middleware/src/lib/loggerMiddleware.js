// 18.2 미들웨어란?
/* 
    리덕스 미들웨어는 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행,
    -> 액션과 리듀서 사이의 중간자라고 볼 수 있음.
    액션 -> 미들웨어 -> 리듀서 -> 스토어
*/

const loggerMiddleware = store => next => action => {
    // 미들웨어 기본 구조
    // 이번에 만들 미들웨어는 다음 정보를 순차적으로 콘솔에 보여줌
    // 1. 이전 상태
    // 2. 액션 정보
    // 3. 새로워진 상태
    console.group(action && action.type); // 액션 타입으로 log를 그룹화함
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); // 업데이트된 상태
    console.groupEnd(); // 그룹 끝
}

/* 
// 위의 화살표 함수는 이 구조와 동일함.
const loggerMiddleware = function loggerMiddleware(store) {
    return function(next) {
        return function(action) {

        }
    }
}
*/

export default loggerMiddleware;