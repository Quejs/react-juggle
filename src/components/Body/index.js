import React from 'react';
// import showdown from 'showdown'
import image from './myself.jpg'
import changelog from './CHANGELOG.md'

console.log('changelog: ', changelog);
console.log('image: ', image);

// const converter = new showdown.Converter()
// const text = '# hello, markdown!'
// const html = converter.makeHtml(text)

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
	componentDidMount() {}

    componentWillUnmount() {}
    
    render() {
		return <>
            <img width={100} height={100} src={image}></img>
            <div dangerouslySetInnerHTML={{ __html: changelog }}></div>
        </>
	}
}