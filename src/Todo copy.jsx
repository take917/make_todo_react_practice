import { use, useState } from "react";
import "./App.css";
import { EditBox } from "./Components/EditBox";
const Todo = () => {
  // inputのタスクに使用
  const [todoTask, setTodoTask] = useState([]);
  // タスクのリストの保管用に使用
  const [taskList, setTaskList] = useState([]);

  // input Boxで入力した値を取得
  const onChangeTask = (e) => {
    setTodoTask(e.target.value);
  };

  // 追加ボタンのクリックイベントに使用
  const onClickAdd = () => {
    // input Boxがからの場合、ボタンを押しても反応しない様にする
    if (todoTask === "") return;
    const tasks = [...taskList, todoTask];
    setTaskList(tasks);
    setTodoTask("");
  };

  const onClickDelete = (index) => {
    const newTasks = [...taskList];
    newTasks.splice(index, 1);
    setTaskList(newTasks);
  };

  const onClickEdit = (index) => {
    const editTasks = [...taskList];
    editTasks[index] = "編集";
    setTaskList(editTasks);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="taskを入力"
          onChange={onChangeTask}
          value={todoTask}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div>タスク一覧</div>
      {/* =>は１行で返却する場合、returnや{}をなくせるので、省略表示 */}
      {taskList.map((task, index) => (
        <>
          <div className="taskSpace" key={task}>
            <p>{task}</p>
            <button onClick={() => onClickEdit(index)}>編集</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        </>
      ))}
    </>
  );
};

export default Todo;
