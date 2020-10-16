import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'
import OrphanagesMap from './pages/OrphanagesMap'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </Router>
    )
}