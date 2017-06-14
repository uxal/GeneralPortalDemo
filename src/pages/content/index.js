import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/navigation';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import Add from 'material-ui/svg-icons/content/add';
import Create from 'material-ui/svg-icons/content/create';
import ViewList from 'material-ui/svg-icons/action/view-list';

import PageContainer from '../../components/pageContainer/pageContainer';
import Tile from '../../components/pageContainer/tile';

import styles from '../../components/pageContainer/pageContainer.css';

import { lime500 } from 'material-ui/styles/colors';

const breadCrumbsStyle = {
    padding: '20px'
}

class ContentManagement extends Component {

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
                                    <Tile title="Create"
                                          icon={<Avatar icon={<Add style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                                          iconHovered={<Avatar icon={<Add style={{fill: lime500}}/>} backgroundColor={'#fff'}/>}
                                          color={lime500}
                                          target={{path: '/content/create', color: {lime500}, translation: ['manage content', 'create']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Edit"
                                          icon={<Avatar icon={<Create style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                                          iconHovered={<Avatar icon={<Create style={{fill: lime500}}/>} backgroundColor={'#fff'}/>}
                                          color={lime500}
                                          target={{path: '/content/edit', color: {lime500}, translation: ['manage content', 'edit']}}
                                    />
                                </div>
                            </div>
                            <div className={styles.verticalSpacebetweenTiles}></div>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Tile title="Overview"
                                          icon={<Avatar icon={<ViewList style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                                          iconHovered={<Avatar icon={<ViewList style={{fill: lime500}}/>} backgroundColor={'#fff'}/>}
                                          color={lime500}
                                          target={{path: '/content/overview', color: {lime500}, translation: ['manage content', 'overview']}}
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

export default connect(null, actions)(ContentManagement);
