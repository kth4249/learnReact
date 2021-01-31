import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

// 17.7.5 useActions 유틸 Hook을 만들어서 사용하기
export default function useActions(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch))
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, deps] : deps
    );
}