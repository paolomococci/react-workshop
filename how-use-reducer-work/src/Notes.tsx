import { FC, useEffect, memo } from 'react';
import Schedule from './Schedule';

interface Props {
    id: number
}

const Notes: FC<Props> = ({ id }) => {

    useEffect(() => {
        console.log('rendering <Notes/>')
    });
    
    return (
        <Schedule id={0}/>
    );
}

export default memo(Notes);
