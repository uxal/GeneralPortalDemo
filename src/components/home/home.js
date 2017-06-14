/**
 * This is the HTML of the first page displayed under the header
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/navigation';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.changeBackgroundToGrey(false);
    }


    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h2>This is the home page</h2>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(Home);