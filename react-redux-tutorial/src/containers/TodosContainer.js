import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/2.Todos';
import useActions from '../lib/useActions';

/* const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // 비구조화 할당을 통해 todos를 분리하여
  // state.todos.input 대신 todos.input을 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer); */

// 17.7.4 TodosContainer를 Hooks로 전환하기

const TodosContainer = () => {
    const { input, todos } = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }))
    const dispatch = useDispatch();
    // const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    // 17.7.5 useActions 유틸 Hook을 만들어서 사용하기
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    )
    
    return (
        <Todos 
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}

// export default TodosContainer;
// useSelector를 사용해서 리덕스 상태를 조회했을 때는 최적화 작업이 자동으로
// 이루어지지 않으므로 React.memo를 컨테이너 컴포넌트에 사용해 주어야 함.
export default React.memo(TodosContainer);
