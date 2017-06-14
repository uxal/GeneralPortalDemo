import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/navigation';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import Person from 'material-ui/svg-icons/social/person';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Gavel from 'material-ui/svg-icons/action/gavel';

import PageContainer from '../../components/pageContainer/pageContainer';
import Tile from '../../components/pageContainer/tile';

import styles from '../../components/pageContainer/pageContainer.css';

import { indigo500 } from 'material-ui/styles/colors';

const breadCrumbsStyle = {
    padding: '20px'
}

class UsersRoles extends Component {

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
                                    <Tile title="Users"
                                          icon={<Avatar icon={<Person style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                                          iconHovered={<Avatar icon={<Person style={{fill: indigo500}}/>} backgroundColor={'#fff'}/>}
                                          color={indigo500}
                                          target={{path: '/usersroles/users', color: {indigo500}, translation: ['users & roles', 'users']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Groups"
                                          icon={<Avatar icon={<GroupWork style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                                          iconHovered={<Avatar icon={<GroupWork style={{fill: indigo500}}/>} backgroundColor={'#fff'}/>}
                                          color={indigo500}
                                          target={{path: '/usersroles/circles', color: {indigo500}, translation: ['users & roles', 'circles']}}
                                    />
                                </div>
                            </div>
                            <div className={styles.verticalSpacebetweenTiles}></div>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Roles"
                                          icon={<Avatar icon={<Gavel style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                                          iconHovered={<Avatar icon={<Gavel style={{fill: indigo500}}/>} backgroundColor={'#fff'}/>}
                                          color={indigo500}
                                          target={{path: '/usersroles/roles', color: {indigo500}, translation: ['users & roles', 'roles']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6">

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

export default connect(null, actions)(UsersRoles);
