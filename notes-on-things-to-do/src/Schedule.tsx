import { FC, useEffect, memo } from 'react';
import Task from './Task';

export type Pointer = {
    id: number
    task: string
}

interface Props {
    pointers: Pointer[]
    handleDelete: any
}

const Schedule: FC<Props> = ({ pointers, handleDelete }) => {

    useEffect(() => {
        console.log('rendering <Schedule/>')
    })

    return (
        <ul>
            {pointers.map((pointer: Pointer) => (
                <Task key={pointer.id} id={pointer.id} task={pointer.task} handleDelete={handleDelete}/>
            ))}
        </ul>
    )
}

export default memo(Schedule)
