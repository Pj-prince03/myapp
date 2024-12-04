import React, { useState } from 'react'
import TaskCard from './TaskCard'

const CardList = () => {
    const [id, setId] = useState(0)
    const [taskStatus, setTaskStatus] = useState('Incomplete')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [deleteId, setDeleteId] = useState('')
    const [tasks, setTasks] = useState([])
    const [changeStatus, setChangeStatus] = useState('')



    const addTask = () => {
        setTasks([...tasks, { id: tasks.length + 1, title: title, description: description, taskStatus: taskStatus }])
    }


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    if (deleteId !== '') {
        setTasks(tasks.filter(task => task.id !== deleteId))
        setDeleteId('')
    }

    if (changeStatus !== '') {
        setTasks(tasks.map(task => {
            if (task.id === changeStatus) {
                if (task.taskStatus === 'Incomplete') {
                    return { ...task, taskStatus: 'Complete' }
                } else {
                    return { ...task, taskStatus: 'Incomplete' }
                }
            } else {
                return task
            }
        })
        )
        setChangeStatus('')
    }
    return (
        <div className='Task-input'>
            <input onChange={handleTitleChange} type="text" placeholder="Title" />
            <input onChange={handleDescriptionChange} type="text" placeholder="Description" />
            <br />
            <button className='Addtask-btn' onClick={addTask}>Add Task</button>
            <TaskCard tasks={tasks} setDeleteId={setDeleteId} setChangeStatus={setChangeStatus} />
        </div>
    )
}

export default CardList