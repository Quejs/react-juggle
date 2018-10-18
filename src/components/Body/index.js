import React from "react";
import showdown from "showdown";
import image from "./image.jpg";
import changelog from "./CHANGELOG.md";

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            html: ""
        };
    }

    componentDidMount() {
        this.getMarkdownFile();
    }

    componentWillUnmount() { }

    getMarkdownFile() {
        sfetch(changelog)
            .then(res => {
                return res.text();
            })
            .then(data => {
                const converter = new showdown.Converter();

                /* eslint-disable react/no-danger */
                const html = (
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data) }} />
                );

                this.setState({ html });
            })
            .catch(err => {
                sconsole.log("err: ", err);
            });
    }

    render() {
        const { html } = this.state;
        return (
            <>
                <img width={200} height={100} src={image} />
                {html}
            </>
        );
    }
}
