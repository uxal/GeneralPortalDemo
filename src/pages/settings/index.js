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

import { yellow700 } from 'material-ui/styles/colors';

const breadCrumbsStyle = {
    padding: '20px'
}

class SettingsManagement extends Component {

    componentWillMount() {
        this.props.changeBackgroundToGrey(true);
    }

    render() {
        return (
            <PageContainer>
                <div className="row">
                    <div className="col-xs-0 col-md-1 col-lg-1 hidden-xs-down">
                    </div>
                    <div className="col-xs-12 col-md-10 col-lg-10">
                        <Paper zDepth={2} style={breadCrumbsStyle}>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Box settings"
                                          icon={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<Business style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/box', color: {yellow700}, translation: ['settings', 'box settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Why settings"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/why', color: {yellow700}, translation: ['settings', 'why settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Knowledge centers"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/knowledgecenters', color: {yellow700}, translation: ['settings', 'knowledge centers']}}
                                    />
                                </div>
                            </div>
                            <div className={styles.verticalSpacebetweenTiles}></div>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Free flow settings"
                                          icon={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<Business style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/freeflow', color: {yellow700}, translation: ['settings', 'free flow settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="View settings"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/view', color: {yellow700}, translation: ['settings', 'view settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Translations"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/translations', color: {yellow700}, translation: ['settings', 'translations']}}
                                    />
                                </div>
                            </div>
                            <div className={styles.verticalSpacebetweenTiles}></div>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Contact center settings"
                                          icon={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<Business style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/contactcenter', color: {yellow700}, translation: ['settings', 'contact center settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Mail templates"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/mailtemplates', color: {yellow700}, translation: ['settings', 'mail templates']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Hello & Goodbye"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/hellogoodbye', color: {yellow700}, translation: ['settings', 'hello & goodbye']}}
                                    />
                                </div>
                            </div>
                            <div className={styles.verticalSpacebetweenTiles}></div>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Workspace settings"
                                          icon={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<Business style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/workspace', color: {yellow700}, translation: ['settings', 'Workspace settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Service page settings"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/servicepage', color: {yellow700}, translation: ['settings', 'Service page settings']}}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <Tile title="Source type settings"
                                          icon={<Avatar icon={<SettingsOverscan style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                                          iconHovered={<Avatar icon={<SettingsOverscan style={{fill: yellow700}}/>} backgroundColor={'#fff'}/>}
                                          color={yellow700}
                                          target={{path: '/settings/sourcetype', color: {yellow700}, translation: ['settings', 'Source type settings']}}
                                    />
                                </div>
                            </div>
                        </Paper>
                    </div>
                    <div className="col-xs-0 col-md-1 col-lg-1 hidden-xs-down">
                    </div>
                </div>
            </PageContainer>
        )
    }
}

export default connect(null, actions)(SettingsManagement);
