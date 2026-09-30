import { useState } from 'react';

function TodoList() {

  const [inputValue, setInputValue] = useState(""); //نص الحقل
  const [tasks, setTasks] = useState([]); //مصفوفة خالية
  //إضافة مهمة جديدة
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    if (inputValue.trim() === "") return; // منع الفارغ

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setTasks([...tasks, newTask])
    setInputValue("");//تفريغ الحقل
  }
  //قلب حالة الإنجاز
  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id == id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  }

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
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'done' : ''}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;