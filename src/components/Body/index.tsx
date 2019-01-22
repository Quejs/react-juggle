import * as React from 'react'
import showdown from 'showdown'
import image from './image.jpg'
import changelog from './CHANGELOG.md'

interface State {
    html: string
}

export default class extends React.PureComponent {
    state: State

    constructor(props: any) {
        super(props)

        this.state = {
            html: ''
        }
    }

    componentDidMount() {
        this.getMarkdownFile()
    }

    componentWillUnmount() {}

    getMarkdownFile() {
        fetch(changelog)
            .then(res => {
                return res.text()
            })
            .then(data => {
                const converter = new showdown.Converter()

                /* eslint-disable react/no-danger */
                const html = (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(data)
                        }}
                    />
                )

                this.setState({ html })
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }

    render() {
        const { html } = this.state
        return (
            <>
                <img width={200} height={100} src={image} />
                {html}
            </>
        )
    }
}
