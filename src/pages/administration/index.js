import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/navigation';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Business from 'material-ui/svg-icons/communication/business';
import BugReport from 'material-ui/svg-icons/action/bug-report';
import Description from 'material-ui/svg-icons/action/description';
import SettingsOverscan from 'material-ui/svg-icons/action/settings-overscan';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';

import PageContainer from '../../components/pageContainer/pageContainer';
import Tile from '../../components/pageContainer/tile';

import styles from '../../components/pageContainer/pageContainer.css';

import { red500 } from 'material-ui/styles/colors';

const breadCrumbsStyle = {
    padding: '20px'
}

class Administration extends Component {

    componentWillMount() {
        this.props.changeBackgroundToGrey(true);
    }

    render() {
        return (
            <PageContainer>
                <div className="row">
                    <div className="col-xs-0 col-md-1 col-lg-2 hidden-xs-down">
                    </div>
                    <div className="col-xs-12 col-md-10 col-lg-8">
                        <Paper zDepth={2} style={breadCrumbsStyle}>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Customers"
                                          icon={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                                          iconHovered={<Avatar icon={<Business style={{fill: red500}}/>} backgroundColor={'#fff'}/>}
                                          color={red500}
                                          target={{path: '/administration/customers', color: {red500}, translation: ['administration', 'customers']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Error log"
                                          icon={<Avatar icon={<BugReport style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                                          iconHovered={<Avatar icon={<BugReport style={{fill: red500}}/>} backgroundColor={'#fff'}/>}
                                          color={red500}
                                          target={{path: '/administration/errorlog', color: {red500}, translation: ['administration', 'error log']}}
                                    />
                                </div>
                            </div>
                            <div className={styles.verticalSpacebetweenTiles}></div>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Blog"
                                          icon={<Avatar icon={<ImportContacts style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                                          iconHovered={<Avatar icon={<ImportContacts style={{fill: red500}}/>} backgroundColor={'#fff'}/>}
                                          color={red500}
                                          target={{path: '/administration/blog', color: {red500}, translation: ['administration', 'blog']}}
                                    />
                                </div>
                            </div>
                        </Paper>
                    </div>
                    <div className="col-xs-0 col-md-1 col-lg-2 hidden-xs-down">
                    </div>
                </div>
            </PageContainer>
        )
    }
}

export default connect(null, actions)(Administration);
