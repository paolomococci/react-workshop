import { Component } from "react";
import axios from "axios";

type Topic = {
    number: number
    title: string
    url: string
    state: string
  }

  type Props = {}

  type State = { topics: Topic[] };

class Topics extends Component<Props, State> {
    constructor(props: any) {
        super(props)
  
        this.state = {
            topics: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
            .then((response: any) => {
                this.setState({
                    topics: response.data
                })
            })
    }

    render() {
        const { topics = [] } = this.state
    
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
}

export default Topics
