import { FC, useEffect, memo } from 'react';

interface Props {
    id: number
}

const Schedule: FC<Props> = ({ id }) => {

    useEffect(() => {
        console.log('rendering <Schedule/>')
    })
    
    return (
        <li>{id} <button>some</button></li>
    )
}

export default memo(Schedule)
