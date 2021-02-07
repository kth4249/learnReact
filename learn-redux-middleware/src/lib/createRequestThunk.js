
import { finishLoading, startLoading } from './../modules/loading';

// 18.3.1.5 코드 리팩토링
export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({ type }); // 시작됨
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            }); // 성공
            dispatch(finishLoading(type));
        } catch(e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            }) // 에러 발생
            dispatch(startLoading(type));
            throw e;
        }
    }
}