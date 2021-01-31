import React from 'react'
import Counter from '../components/1.Counter';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';
import { useCallback } from 'react';

// const CounterContainer = ({number, increase, decrease}) => {
//     return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>;
// }

// 17.7.1 useSelector로 상태 조회하기
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    // connect 함수 대신 useSelector를 사용하여 counter.number를 조회함으로써
    // Counter에게 props을 넘겨줄 수 있음.

    // 17.7.2 useDispatch를 사용하여 액션 디스패치하기
    const dispatch = useDispatch();
    
    // 숫자가 바뀌어서 컴포넌트가 리렌더링될 때마다 onIncrease 함수와 onDecrease 함수가
    // 새롭게 만들어지고 있음.
    // 성능을 최적화하기 위해 useCallback으로 액션을 디스패치하는 함수를 감싸는 것이 좋음.
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter 
            number={number}
            // onIncrease={() => dispatch(increase())}
            // onDecrease={() => dispatch(decrease())}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

const mapStateToProps = state => ({
    number: state.counter.number,
})
const mapDispatchToProps = dispatch => ({
    //임시 함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);

// 익명함수로 인자를 전달할 수 있음
export default connect(
    state => ({
        number: state.counter.number,
    }),
    // dispatch => ({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease())
    // })
    
    // 액션 생성 함수의 개수가 많아진다면 조금 번거로울 수 있어
    // bindeActionCreators 유틸 함수를 사용할 수도 있음.
    // dispatch =>
    //     bindActionCreators(
    //         {
    //             increase,
    //             decrease
    //         },
    //         dispatch
    //     ),
    
    // 더 간편한 방법은 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루이전
    // 객체 형태로 넣어 줄 수 있음.
    {
        increase,
        decrease
    }
)(CounterContainer);