import { useState } from "react";
import "./tasklist.css";

const TaskList = (props) => {

  const [searchTask, setSearchTask] = useState("");

  const data = props.todoList.filter((item => {
    if (searchTask === "") {
      return item;
    }
    else if (item.title.toLowerCase().includes(searchTask.toLocaleLowerCase())
      || item.priority.toLowerCase().includes(searchTask.toLocaleLowerCase())
    ) {
      return item;
    }
    return false;
  }
  )).map((item, index) => (
    <>
      <span className={item.currentState ? "done" : ""}>

        <div key={index} className=" container-fluid row">
          <div className="col border p-2" data-toggle="tooltip" title={item.description}>{item.title}</div>
          <div className="col border p-2">{item.priority}</div>
          <div className="col border p-2">{item.createdAt}</div>
          <div className="col border p-2">{item.dueDate}</div>

          <div className="col border p-2">
            <i className="btn btn-primary btn-sm fa fa-pencil-square-o ml-2"
              onClick={() => props.onEditTodo(index)}
              data-toggle="modal" data-target="#editTask"
            ></i>
            <button className={item.currentState ? "doneBtnClick" : "doneBtn"}
              onClick={() => props.onCompleteTodo(index)}
            >Done</button>
            <i className="btn btn-danger btn-sm fa fa-trash-o ml-3"
              onClick={() => props.onDeleteTask(index)}
            ></i>

          </div>
        </div>
      </span>


      <div className="modal fade" id="editTask" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add / Edit Task</h4>
            </div>
            <div className="modal-body">

              <form>
                <div className="form-group">
                  <label>Summary</label>
                  <input type="text" className="form-control"
                    placeholder="Enter the summary of task"
                    value={item.itemEditText}
                    onChange={(event) => {
                      const editedValue = event.target.value;
                      props.onChangeEdit(index, editedValue);
                    }
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control"
                    placeholder="Enter the description" rows="3"
                    value={props.valueDesc}
                    onChange={props.onInputDescChange}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label>Due Date</label>
                    <input type="date" className="form-control"
                      value={props.valueDueDate}
                      onChange={props.onInputDueDateChange}
                    />
                  </div>
                  <div className="col-sm">
                    <label>Priority</label>
                    <select className="custom-select"
                      onChange={props.onInputPriorityChange}
                      value={props.valuePriorityChange}
                    >
                      <option value="none">None</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal"
                onClick={() => props.onCancelEditHandler(index)}

              >Cancel</button>
              <button type="submit" className="btn btn-success"
                onClick={() => props.onSubmitEditHandler(index)}
              >Save</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
  )
  // .......................................................................

  const completedData = props.todoList.map((item, index) => (
    <>
      {item.currentState && (

        <span className={item.currentState ? "done" : ""}>

          <div key={index} className=" container-fluid row">
            <div className="col border p-2">{item.title}</div>
            <div className="col border p-2">{item.priority}</div>
            <div className="col border p-2">{item.createdAt}</div>
            <div className="col border p-2">{item.dueDate}</div>

            <div className="col border p-2">
              <button className={item.currentState ? "doneBtnClick" : "doneBtn"}
                onClick={() => props.onCompleteTodo(index)}
              >Done</button>
              <i className="btn btn-danger btn-sm fa fa-trash-o ml-3"
                onClick={() => props.onDeleteTask(index)}
              ></i>

            </div>
          </div>
        </span>

      )}
    </>
  )
  )
  // .......................................................................

  const pendingData = props.todoList.map((item, index) => (
    <>
      {!item.currentState && (

        <span className={item.currentState ? "done" : ""}>

          <div key={index} className=" container-fluid row">
            <div className="col border p-2">{item.title}</div>
            <div className="col border p-2">{item.priority}</div>
            <div className="col border p-2">{item.createdAt}</div>
            <div className="col border p-2">{item.dueDate}</div>

            <div className="col border p-2">
              <i className="btn btn-primary btn-sm fa fa-pencil-square-o ml-2"
                onClick={() => props.onEditTodo(index)}
                data-toggle="modal" data-target="#editTask"
              ></i>
              <button className={item.currentState ? "doneBtnClick" : "doneBtn"}
                onClick={() => props.onCompleteTodo(index)}
              >Done</button>
              <i className="btn btn-danger btn-sm fa fa-trash-o ml-3"
                onClick={() => props.onDeleteTask(index)}
              ></i>

            </div>
          </div>
        </span>

      )}
    </>
  )
  )

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-4">
            <label>Group By</label>
            <select className="custom-select"

            >
              <option disabled selected className="bg-dark">Priority</option>
              <option value="none">None</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="col-sm">
            <label>Search</label>
            <form className="form">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <input type="search" className="form-control" placeholder="Search Tasks"
                  onChange={(event) => {
                    setSearchTask(event.target.value);
                  }}
                />

              </div>
            </form>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#all" role="tab" data-toggle="tab">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pending" role="tab" data-toggle="tab">Pending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#completed" role="tab" data-toggle="tab">Completed</a>
          </li>
        </ul>
      </div>

      <div className="tab-content container mt-3">
        <div role="tabpanel" className="tab-pane active" id="all">
          <div className="container-fluid row mb-3">
            <div className="col border p-2 font-weight-bold">Summary
              <i className="fa fa-sort-desc sort_ic_desc text-white float-right" onClick={props.onSortDataDesc}></i>
              <i className="fa fa-sort-asc sort_ic_asc text-white float-right"
                onClick={props.onSortDataAsc}
              ></i>
            </div>
            <div className="col border p-2 font-weight-bold">Priority
              <i className="fa fa-sort-desc sort_ic_desc text-white float-right"></i>
              <i className="fa fa-sort-asc sort_ic_asc text-white float-right"></i>
            </div>
            <div className="col border p-2 font-weight-bold">Created On
              <i className="fa fa-sort-desc sort_ic_desc text-white float-right"></i>
              <i className="fa fa-sort-asc sort_ic_asc text-white float-right"></i>
            </div>
            <div className="col border p-2 font-weight-bold">Due By
              <i className="fa fa-sort-desc sort_ic_desc text-white float-right"></i>
              <i className="fa fa-sort-asc sort_ic_asc text-white float-right"></i>
            </div>
            <div className="col border p-2 font-weight-bold">Actions</div>
          </div>

          {data}

        </div>

        <div role="tabpanel" className="tab-pane fade" id="pending">
          <div className="container-fluid row mb-3">
            <div className="col border p-2 font-weight-bold">Summary</div>
            <div className="col border p-2 font-weight-bold">Priority</div>
            <div className="col border p-2 font-weight-bold">Created On</div>
            <div className="col border p-2 font-weight-bold">Due By</div>
            <div className="col border p-2 font-weight-bold">Actions</div>
          </div>

          {pendingData}

        </div>

        <div role="tabpanel" className="tab-pane fade" id="completed">
          <div className="container-fluid row mb-3">
            <div className="col border p-2 font-weight-bold">Summary</div>
            <div className="col border p-2 font-weight-bold">Priority</div>
            <div className="col border p-2 font-weight-bold">Created On</div>
            <div className="col border p-2 font-weight-bold">Due By</div>
            <div className="col border p-2 font-weight-bold">Actions</div>
          </div>

          {completedData}


        </div>

      </div>

    </>
  );
}

export default TaskList;