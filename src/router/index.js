import * as React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'antd/dist/antd.css'
// import enUS from 'antd/lib/locale-provider/en_US'

import Component from 'src/components/Header'

export default class extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hi, I m John Smile',
            date: null
        }
    }

    render() {
        const { message } = this.state

        return (
            <HashRouter>
                <LocaleProvider locale={zhCN}>
                    <Switch>
                        <Route path="/user" render={() => <h1>{message}</h1>} />
                        <Route path="/" component={Component} />
                    </Switch>
                </LocaleProvider>
            </HashRouter>
        )
    }
}
