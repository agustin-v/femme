import React from 'react'
import { withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'

const Routes = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </React.Fragment>
    )
}

export default withRouter(Routes)