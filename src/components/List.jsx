/* eslint-disable no-restricted-globals */
import { useContext, memo } from "react";
import { Context } from "../Context";

function List({ task }) {
    const { deleteData, patchData } = useContext(Context);

    function handleDelete() {
        if (confirm("Are you sure you want to delete this task?")) {
            deleteData(task.id);
        }
    }

    return (
        <div>
            <li
                className={`list-group-item d-flex justify-content-between align-items-center shadow-sm rounded ${
                    task.completed ? "bg-success text-underline" : ""
                }`}
            >
                <span>
                    <input
                        type="checkbox"
                        className="me-3"
                        onChange={() => {
                            patchData(task.id);
                        }}
                        checked={task.completed}
                    />
                    <span
                        className={`${task.completed && "text-decoration-line-through"}`}
                    >
                        {task.task}
                    </span>
                </span>
                <button onClick={handleDelete} className="btn btn-danger">
                    <i className="fa-solid fa-trash me-2"></i>Delete
                </button>
            </li>
        </div>
    );
}

export default memo(List);
