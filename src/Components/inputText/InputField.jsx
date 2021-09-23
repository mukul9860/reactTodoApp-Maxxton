const InputField = (props) => {

    return (
        <>
            <div className="modal fade" id="addTask" role="dialog" aria-hidden="true">
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
                                        value={props.valueSummary}
                                        onChange={props.onInputSummaryChange}

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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-success"
                                onClick={props.onSaveBtn}
                                data-dismiss="modal"
                            >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default InputField;
