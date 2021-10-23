import { FC, useEffect, memo } from 'react';
import Task from './Task';

interface Props {
    id: number
}

const Schedule: FC<Props> = ({ id }) => {

    useEffect(() => {
        console.log('rendering <Schedule/>')
    });
    
    return (
        <Task id={0}/>
    );
}

export default memo(Schedule);
