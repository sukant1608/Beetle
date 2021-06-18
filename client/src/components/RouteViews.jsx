import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const RouteViews = () => {
    return <main>
        <Switch>
            <Route
                exact
                path="/"
                render={() => <HomePage />}
            />
            <Route
                exact
                path='/branch'
                render={() => <div>Branch</div>}
            />
        </Switch>
    </main>
}

export default withRouter(RouteViews)