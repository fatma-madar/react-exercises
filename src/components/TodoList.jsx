import { useState, useReducer, useEffect} from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import { useLocalStorage } from '../hooks/useLocalStorage';

import '../styles/todo.css';


function TodoList() {
  const [inputValue, setInputValue] = useState(''); // حالة لتخزين قيمة الإدخال
  const [savedTasks, setSavedTasks] = useLocalStorage('tasks', []); // استدعاء هوك useLocalStorage لتخزين المهام في localStorage
  const [state, dispatch] = useReducer(todoReducer, {tasks: savedTasks}); //مصفوفة خالية

  //حفظ المهام عند كل تغيير
  useEffect(() => {
    setSavedTasks(state.tasks);
  },[state.tasks]);


  //إضافة مهمة جديدة
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    if (inputValue.trim() === "") return; // منع الفارغ

    dispatch({ type: 'ADD_TASK', payload: inputValue });
    setInputValue("");
  };

  //قلب حالة الإنجاز
  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };
  //حذف مهمة
  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <div className="todo-app">
      <h1>قائمة المهام</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="اكتب مهمة جديدة ..."
        />
        <button type="submit">إضافة</button>
      </form>
      <ul className="task-list" dir="rtl">
        {state.tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'done' : ''}>
              {task.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;