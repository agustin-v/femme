import React from 'react';
import Routes from './Routes'
import NavBar from '../components/navbar/navbar'


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Routes />
            </React.Fragment>  
        );
    }
}

export default App;
