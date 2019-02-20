import * as React from 'react'
// import { createBrowserHistory } from 'history'
// import { string } from 'prop-types'
import InitailRouter from './router'
import './style.css'

// interface State {
//     message: string;
//     enthusiasmLevel?: number
//     onIncrement?: () => void
//     onDecrement?: () => void
// }

export default class extends React.PureComponent {
    // state: State
    componentDidMount() {}

    componentWillUnmount() {}

    // handleBack = () => {}

    render() {
        return <InitailRouter />
    }
}
