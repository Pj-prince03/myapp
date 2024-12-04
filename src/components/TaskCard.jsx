import React, { useState } from 'react'
import './general.css'

const TaskCard = ({ tasks, setDeleteId, setChangeStatus }) => {

    const getId = (id) => {
        setDeleteId(id)
    }

    const changeStatus = (id) => {
        setChangeStatus(id)
    }


    return (
        <div className='taskList'>
            {tasks.map(task => {
                return (
                    <div key={task.id} className='TaskCard'>
                        <div className='TaskCard-title' >
                            <h1>{task.title}</h1>
                            <button onClick={() => { getId(task.id) }} >❌</button>
                        </div>
                        <div className="TaskCard-description">
                            <p>{task.description}</p>
                        </div>
                        <div className="TaskCard-footer">
                            <p>{task.taskStatus}</p>
                        </div>
                        <button onClick={() => { changeStatus(task.id) }} className='TaskCard-button'>Change Status</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskCard