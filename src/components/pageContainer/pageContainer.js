/**
 * This component creates the top bread crumbs bar and then it loads what we want to show in it
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import styles from './pageContainer.css';

import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import BreadCrumbs from './breadCrumbs';

const breadCrumbsStyle = {
    width: '100%',
    padding: '10px 15px',
}

class PageContainer extends Component {
    render() {
        return (
            <div style={{height:'80%'}}>
                <div className="row">
                    <div className={styles.breadCrumbs + " col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <Paper zDepth={2} rounded={false} style={breadCrumbsStyle}>
                            <BreadCrumbs navigationObject={this.props.navigationObject}/>
                        </Paper>
                    </div>
                </div>
                <div className="row">
                    <div className={styles.pageContainerEmptyRow +" col-md-12 col-lg-12"}></div>
                </div>
                <div className={styles.pageContainer}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {navigationObject: state.globalReducer.navigationObject};
}

export default connect(mapStateToProps)(PageContainer);
