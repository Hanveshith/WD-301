import React from 'react'
import './TaskCard.css'

interface Props{
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}

const TaskCard = ({title,dueDate,completedAtDate,assigneeName}) => {
  // console.log(props)
  let dateType = ''
  let date = ''
  if(dueDate){
    dateType = "due on:";
    date = dueDate;
  }
  else{
    dateType = "Completed on:";
    date = completedAtDate;
  }
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{dateType} {date}</p>
      <p>Assignee: {assigneeName}</p>
    </div>
  )
}

export default TaskCard