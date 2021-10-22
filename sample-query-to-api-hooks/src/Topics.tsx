import { FC, useState, useEffect } from 'react';
import axios from 'axios';

type Topic = {
    number: number
    title: string
    url: string
    state: string
  }

const Topics: FC = () => {
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        axios
            .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
            .then((response: any) => {
                setTopics(response.data)
            })
    }, []);
    
        return (
            <>
                <h3>Topics</h3>
                <table>
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>title</th>
                            <th>URI</th>
                            <th>state</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map((topic: Topic) => (
                            <tr key={topic.number}>
                                <td><em>{topic.number}</em></td>
                                <td>{topic.title}</td>
                                <td><a href={`https://api.github.com/repos/ContentPI/ContentPI/issues/${topic.number}`} target="_blank" rel="noreferrer">link</a></td>
                                <td>{topic.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
      }

export default Topics
