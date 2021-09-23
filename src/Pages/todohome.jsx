import TodoList from "../Components/todoList/TodoList";
import "./style.css";

const Todo = () => {
    return (
        <div className="container mt-4 w-75">
            <h1>ToDo App
                <i className="mt-2 mr-4 fa fa-plus-circle float-right addTask_ic" data-toggle="modal" data-target="#addTask"></i>
            </h1>
            <TodoList />
        </div>
    );
};

export default Todo;