import InputField from '../inputText/InputField';
import { useState, useEffect } from 'react';
import TaskList from '../taskList/TaskList';

const TodoList = () => {

    const [summaryText, setsummaryText] = useState("");
    const [descriptionText, setdescriptionText] = useState("");
    const [dueDateInput, setDueDate] = useState("");
    const [PriorityInput, setPriorityInput] = useState("");
    const [todoList, setTodolist] = useState([]);

    // created this for getting current date....
    const createdDate = (n) => {
        return (n < 10 ? '0' : '') + n;
    }
    var date = new Date();
    var month = createdDate(date.getMonth() + 1);
    var day = createdDate(date.getDate());
    var year = date.getFullYear();
    var curDate = year + "-" + month + "-" + day;

    // storing tasks in localstorage...

    const saveDataLS = (tasks) => {
        localStorage.setItem("todoList", JSON.stringify(tasks));
    }
    useEffect(() => {
        if (localStorage.getItem("todoList")) {
            setTodolist(JSON.parse(localStorage.getItem("todoList")));
        }
    }, [])
    const inputSummaryChange = (event) => {
        const textValue = event.target.value;
        setsummaryText(textValue);
    }
    const inputDescChange = (event) => {
        const textValue = event.target.value;
        setdescriptionText(textValue);
    }
    const dueDateChange = (event) => {
        const textValue = event.target.value;
        setDueDate(textValue);
    }
    const priorityChange = (event) => {
        const textValue = event.target.value;
        setPriorityInput(textValue);
    }

    const saveBtn = () => {
        addTask(summaryText, descriptionText, dueDateInput, PriorityInput);

    }
    const addTask = (summaryText, descriptionText, dueDateInput, PriorityInput) => {
        if ((summaryText.trim() && descriptionText.trim() && dueDateInput.trim() && PriorityInput.trim())
            && (summaryText.length >= 10 && summaryText.length <= 140) && (descriptionText.length >= 10 && descriptionText.length <= 500)
        ) {
            const list = [...todoList];
            list.push({
                currentState: false,
                title: summaryText,
                description: descriptionText,
                createdAt: curDate,
                dueDate: dueDateInput,
                priority: PriorityInput,
                isEdit: false,
                itemEditText: summaryText,
            });
            setsummaryText('');
            setdescriptionText('');
            setDueDate('');
            setPriorityInput('');
            setTodolist(list);
            saveDataLS(list);
        }
        else {
            alert("Please Enter the task\nCheck length of summary - min-10 char & max-140 char\nCheck length of description - min-10 char & max-500 char");
            setsummaryText('');
            setdescriptionText('');
            setDueDate('');
            setPriorityInput('');
        }
    }
    const deleteTodo = (index) => {
        let delt = window.confirm("Are you sure!!!...\nYou want to delete...!!!");
        if (delt === true) {
            const list = [...todoList];
            list.splice(index, 1);
            setTodolist(list);
            saveDataLS(list);
        }
    };

    const completeTodo = (index) => {
        const list = [...todoList];
        list[index].currentState = !list[index].currentState;
        setTodolist(list);
        saveDataLS(list);
    }

    const editTodo = (listIndex) => {
        const list = [...todoList];
        list[listIndex].isEdit = true;
        setTodolist(list);
        saveDataLS(list);
    }
    const submitEdit = (listIndex) => {
        const list = [...todoList];
        list[listIndex].title = list[listIndex].itemEditText;
        list[listIndex].isEdit = false;
        setTodolist(list);
        saveDataLS(list);
    }
    const cancelEdit = (listIndex) => {
        const list = [...todoList];
        list[listIndex].itemEditText = list[listIndex].title;
        list[listIndex].isEdit = false;
        setTodolist(list);
        saveDataLS(list);
    }
    const editChange = (listIndex, editValue) => {
        const list = [...todoList];
        list[listIndex].itemEditText = editValue;
        setTodolist(list);
        saveDataLS(list);
    }
    const sortDataAsc = () => {
        const list = [...todoList];
        list.sort(function(a,b) {
            if (a.title.toLowerCase() < b.title.toLowerCase())
            {
                return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase())
            {
                return 1;
            }
            return 0;
        });
        setTodolist(list);
        saveDataLS(list);
    }
    const sortDataDesc = () => {
        const list = [...todoList];
        list.sort(function(a,b) {
            if (a.title.toLowerCase() > b.title.toLowerCase())
            {
                return -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase())
            {
                return 1;
            }
            return 0;
        });
        setTodolist(list);
        saveDataLS(list);
    }
    return (
        <div>
            <InputField
                onInputSummaryChange={inputSummaryChange}
                valueSummary={summaryText}
                onInputDescChange={inputDescChange}
                valueDesc={descriptionText}
                onInputDueDateChange={dueDateChange}
                valueDueDate={dueDateInput}
                onInputPriorityChange={priorityChange}
                valuePriorityChange={PriorityInput}
                onSaveBtn={saveBtn}
            />

            <TaskList
                todoList={todoList}
                onDeleteTask={deleteTodo}
                onCompleteTodo={completeTodo}
                onEditTodo={editTodo}
                onSubmitEditHandler={submitEdit}
                onCancelEditHandler={cancelEdit}
                onChangeEdit={editChange}
                onSortDataAsc={sortDataAsc}
                onSortDataDesc={sortDataDesc}
            />

        </div>
    );
};

export default TodoList;