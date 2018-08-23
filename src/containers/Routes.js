import React from 'react'
import { withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'

const Routes = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' component={NewPost} />
            </Switch>
        </React.Fragment>
    )
}

export default withRouter(Routes)