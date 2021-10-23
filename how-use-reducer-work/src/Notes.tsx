import { FC, useEffect, memo } from 'react';

interface Props {
    id: number
}

const Notes: FC<Props> = ({ id }) => {

    useEffect(() => {
        console.log('rendering <Notes/>')
    })
    
    return (
        <li>{id} <button>some</button></li>
    )
}

export default memo(Notes)
