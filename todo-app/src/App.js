import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

// 11 컴포넌트 성능 최적화
// 11.1 많은 데이터 렌더링하기
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(
    // [
    //   {
    //     id: 1,
    //     text: '리액트의 기초 알아보기',
    //     checked: true,
    //   },
    //   {
    //     id: 2,
    //     text: '컴포넌트 스타일링해 보기',
    //     checked: true,
    //   },
    //   {
    //     id: 3,
    //     text: '일정 관리 앱 만들어 보기',
    //     checked: false,
    //   }
    // ]
    createBulkTodos,
  );

  // 고유값으로 사용될 id
  // ref를 사용해서 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 11.5 onToggle, onRemove 함수가 바뀌지 않게 하기
    // 11.5.1 useState의 함수형 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
