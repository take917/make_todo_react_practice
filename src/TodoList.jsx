import { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("未着手");
  const [taskList, setTaskList] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState([]);
  const onClickAdd = () => {
    if (title === "") return;
    setTaskList([...taskList, { title, status }]);
    setTitle("");
    setStatus("未着手");
  };

  const onClickDelete = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
    setEditIndex(null);
  };

  const onClickEdit = (index) => {
    setEditIndex(index);
    setEditTitle(taskList[index].title);
    setEditStatus(taskList[index].status);
  };
  const onClickUpdate = () => {
    const newList = [...taskList];
    newList[editIndex] = {
      title: editTitle,
      status: editStatus,
    };
    setTaskList(newList);
    setEditIndex(null);
    setEditTitle("");
    setEditStatus("");
  };
  return (
    <>
      <div>
        <h2>タスク追加</h2>
        <input
          type="text"
          placeholder="タイトルを入力"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="未着手">未着手</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
        <button onClick={onClickAdd}>追加</button>

        <h2>タスク一覧</h2>
        {taskList.map((task, index) => (
          <div>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                >
                  <option value="未着手">未着手</option>
                  <option value="進行中">進行中</option>
                  <option value="完了">完了</option>{" "}
                </select>
                <button onClick={onClickUpdate}>完了</button>
                <button onClick={() => setEditIndex(null)}>キャンセル</button>
              </>
            ) : (
              <>
                <div className="input_box">
                  <p>{task.status}</p>
                  <p>{task.title}</p>
                  <button onClick={() => onClickEdit(index)}>編集</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
