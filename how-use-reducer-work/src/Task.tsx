import { FC, useEffect, memo } from 'react';

interface Props {
    id: number
}

const Task: FC<Props> = ({ id }) => {

    useEffect(() => {
        console.log('rendering <Task/>')
    });
    
    return (
        <li>{id} <button>some</button></li>
    );
}

export default memo(Task);
