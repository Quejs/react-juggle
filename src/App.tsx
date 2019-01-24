import * as React from 'react'
import './style.css'
// import { string } from 'prop-types'
import Component from 'src/components/Header'

interface State {
    message: string
    // enthusiasmLevel?: number
    // onIncrement?: () => void
    // onDecrement?: () => void
}

export default class extends React.PureComponent {
    state: State
    constructor(props: any) {
        super(props)
        this.state = {
            message: 'Hi, I m John Smile'
        }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const { message } = this.state
        return (
            <>
                <h1>{message}</h1>
                <Component />
            </>
        )
    }
}
