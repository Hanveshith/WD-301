import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className=" shadow-md border border-slate-100">
        <h2 className=" TaskItem text-base font-bold my-1">{this.props.title}</h2>
        <p className="TaskItem text-sm text-slate-500">
          Due Date: {this.props.dueDate}
        </p>
        <p className="TaskItem text-sm text-slate-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}
export default Task;