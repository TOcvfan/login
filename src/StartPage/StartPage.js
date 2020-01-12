import React from 'react';
import {Link} from 'react-router-dom';

export class StartPage extends React.Component {
    render(){
        return <Link to="/login">login</Link> 
    }
}

//export default StartPage;