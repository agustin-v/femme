import React from 'react'
import { withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import Post from './Post'

const Routes = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' component={NewPost} />
                <Route exact path='/post/:id' component={Post}/>
            </Switch>
        </React.Fragment>
    )
}

export default withRouter(Routes)