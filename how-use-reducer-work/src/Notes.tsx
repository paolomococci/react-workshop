import { useReducer, useState } from 'react';

type Note = {
    id: number
    jotting: string
}

type Action ={
    type: string
    payload?: any
}

type ActionTypes = {
    ADD: 'ADD'
    UPDATE: 'UPDATE'
    DELETE: 'DELETE'
}

const actionType: ActionTypes = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
}

const initJots: Note[] = [
    {id: 1, jotting: "some entry one"},
    {id: 2, jotting: "some entry two"},
    {id: 3, jotting: "some entry three"}
];

const reducer = (jots: Note[], action: Action) => {
    switch (action.type) {
        case actionType.ADD:
            return [...jots, action.payload]
        
        case actionType.DELETE:
            return jots.filter(note => note.id !== action.payload)
            
        case actionType.UPDATE:
            const updatedNote = action.payload
            return jots.map((jot: Note) => jot.id === updatedNote.id ? updatedNote : jot)
        
        default:
            return jots
    }
}

const Notes = () => {

    const [jots, dispatch] = useReducer(reducer, initJots);
    const [jotting, setJotting] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newNote = {
            id: Date.now(),
            jotting
        }
        dispatch({ type: actionType.ADD, payload: newNote })
    }
    
    return (
        <div>
            <h3>Notes</h3>
            <ul>
                {jots.map((jot: Note) => (
                    <li key={jot.id}>
                        {jot.jotting} {' '}
                        <button onClick={() => dispatch({type: actionType.DELETE,payload: jot.id})}>Del</button>
                        <button onClick={() => dispatch({type: actionType.UPDATE,payload: {...jot, jotting}})}>Update</button>
                    </li>
                ))}
            </ul>
                <form onSubmit={handleSubmit}>
                    <input placeholder="new jotting" value={jotting} onChange={e => setJotting(e.target.value)}/>
                </form>
        </div>
    );
}

export default Notes;
