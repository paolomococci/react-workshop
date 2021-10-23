import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Schedule, { Pointer } from './Schedule';

const initSchedule = [
  { id: 1, task: 'some task one' },
  { id: 2, task: 'some task two' },
  { id: 3, task: 'some task three' }
]

function App() {

  const [pointers, setSchedule] = useState(initSchedule);
  const [task, setTask] = useState('');
  const [word, setWord] = useState('');

  const showSchedule = useCallback(() => {
    console.log('change pointers', pointers)
  }, [pointers])

  useEffect(() => {
    showSchedule()
  }, [pointers, showSchedule]);

  const handleCreate = () => {
    const newTask = {
      id: Date.now(),
      task
    }
    setSchedule([...pointers, newTask])
    setTask('')
  }

  const handleSearch = () => {
    setWord(task)
  }

  const filterSchedule = useMemo(() => pointers.filter((pointer: Pointer) => {
    return pointer.task.toLowerCase().includes(word.toLowerCase())
  }), [word, pointers])

  const handleDelete = useCallback((taskId: number) => {
    const newPointer = pointers.filter((pointer: Pointer) => pointer.id !== taskId)
    setSchedule(newPointer)
  }, [pointers])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>
          Notes of Things To Do
        </h3>
        <article>
          <section>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleCreate}>Add</button>
            <button onClick={handleSearch}>Search</button>
            <Schedule pointers={filterSchedule} handleDelete={handleDelete}/>
          </section>
        </article>
      </header>
    </div>
  );
}

export default App;
