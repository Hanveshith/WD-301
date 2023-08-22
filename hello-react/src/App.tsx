import React from 'react';
import TaskCard from './TaskCard';

function App() {

  return (
    <>
      <div className='m-8'>
        <div className='mx-8'>
          <h1 className='text-xl font-bold'>Smarter Tasks</h1>
          <div className='flex'>
            <h1 className='font-semibold mr-2'>Project:</h1><p>Graduation Final Year Project(Revamp College Website)</p>
          </div>
        </div>
        {/* tasks */}
        <div className='flex place-content-center m-8 gap-8'>
          <div className='border-2 border-slate-950 rounded-md h-96 w-96 mt-8'>
            <h1 className='text-2xl font-semibold m-2 text-center'>Pending</h1>
            <div className='flex place-content-center '>
              <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"></TaskCard>
            </div>
            <div className='flex place-content-center '>
              <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M"></TaskCard>
            </div>
          </div>
          <div className='border-2 border-slate-950 rounded-md h-96 w-96 mt-8 '>
            <h1 className='text-2xl font-semibold m-2 text-center'>Done</h1>
            <div className='flex place-content-center '>
              <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"></TaskCard>
            </div>
            <div className='flex place-content-center '>
              <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"></TaskCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
