import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </Router>
    )
}