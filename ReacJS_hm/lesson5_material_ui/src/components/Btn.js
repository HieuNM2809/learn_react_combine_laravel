import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export default class Btn extends Component {
    constructor(props){
        super(props);
        this.state = {name :'hieu'};
    }
    alert = ()=> {
        alert(this.state.name);
    }
    render() {
        const name = this.state.name;
        return (
            <div>
                {name}
                <Button variant="contained" color="secondary" onClick={() => {this.alert(); }}>
                  Click me !!
                </Button>
            </div>
        )
    }
}
