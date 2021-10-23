import { FC, useEffect, memo } from 'react';

interface Props {
    id: number
    task: string
    handleDelete: any
}

const Task: FC<Props> = ({ id, task, handleDelete }) => {

    useEffect(() => {
        console.log('rendering <Task/>', task)
    })
    
    return (
        <li>{task} <button onClick={() => handleDelete(id)}>Del</button></li>
    )
}

export default memo(Task)
