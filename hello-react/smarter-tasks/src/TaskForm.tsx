import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css"

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            dueDate: "",
            description: "",
        }
    }
    inputRef = React.createRef<HTMLInputElement>();
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            dueDate: this.state.dueDate,
            description: this.state.description,
        };
        this.props.addTask(newTask);
        this.setState({ title: "" });
        this.setState({ dueDate: "" });
        this.setState({ description: "" });
    };
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };
    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ dueDate: event.target.value });
    };
    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ description: event.target.value });
    };
    render() {
        return (
            <form onSubmit={this.addTask}>
                <input id="todoTitle" className=" border-2" type="text" value={this.state.title} onChange={this.titleChanged} required /><br /><br />
                <input id="todoDueDate" className=" border-2" value={this.state.dueDate} onChange={this.dueDateChanged} required /><br /><br />
                <input id="todoDescription" className=" border-2" value={this.state.description} onChange={this.descriptionChanged} /><br /><br />
                <button id="addTaskButton" type="submit">Add item</button>
            </form>
        )
    }
}
export default TaskForm;