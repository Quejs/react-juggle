import React from 'react';
import './styles.css'

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: `我来自遥远的国度`
        };
    }
    
	componentDidMount() {}

    componentWillUnmount() {}
    
    render() {
        const { message } = this.state
		return (
            <h2>{ message }</h2>
		)
	}
}