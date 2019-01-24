import * as React from 'react'
import styles from './styles.less'
import Img from './Body/index'

interface State {
    message: string
}

export default class extends React.PureComponent {
    state: State
    constructor(props: any) {
        super(props)
        this.state = {
            message: '我来自遥远的国度'
        }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const { message } = this.state
        return (
            <div>
                <h1>1asdfsaf123</h1>
                <h2 className={styles.title}>{message}</h2>
                <Img />
            </div>
        )
    }
}
