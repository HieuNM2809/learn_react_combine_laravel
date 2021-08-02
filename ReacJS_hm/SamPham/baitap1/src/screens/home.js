import React from 'react';
import NavComponent from '../components/layout/NavComponent.js';
import ListComponent from '../components/layout/ListComponent.js';

class Home extends React.Component {
    render() {
        return (
            <>
                <NavComponent/>
                <ListComponent/>
            </>
        );
    }
}

export default Home;