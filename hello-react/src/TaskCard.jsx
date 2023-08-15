import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  let dateType = ''
  let date = ''
  if(props.dueDate){
    dateType = "due on:";
    date = props.dueDate;
  }
  else{
    dateType = "Completed on:";
    date = props.completedAtDate;
  }
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{dateType} {date}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard