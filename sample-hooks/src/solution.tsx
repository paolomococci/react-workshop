import { FC, useState } from 'react'


const Solution: FC = () => {
    const [counter, setCounter] = useState<number>(0)

    const handleCounter = (operation: string) => {
        if (operation === 'add') {
            return setCounter(counter + 1)
        }
        return setCounter(counter -1)
    }

    return (
        <>
            <article>
                <h4>Counter with hooks</h4>
                <section>
                    <output>Counter: {counter}</output>
                </section>
                <section>
                    <button onClick={() => handleCounter('add')}>Add one</button><br/>
                    <button onClick={() => handleCounter('subtract')}>Subtract one</button>
                </section>
            </article>
        </>
    )
}

export default Solution
