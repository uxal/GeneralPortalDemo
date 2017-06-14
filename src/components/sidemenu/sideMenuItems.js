/**
 * Created by dragos on 10/02/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/navigation';
import SideMenu from './sideMenu';
import SideMenuItem from './sideMenuItem';
import Avatar from 'material-ui/Avatar';
import {
    blue500,
    yellow700,
    red500,
    cyan500,
    teal500,
    lime500,
    green500,
    amber500,
    orange500,
    deepOrange500,
    indigo500,
    pink500
} from 'material-ui/styles/colors';
import Settings from 'material-ui/svg-icons/action/settings';
import Home from 'material-ui/svg-icons/action/home';
import Build from 'material-ui/svg-icons/action/build';
import Gavel from 'material-ui/svg-icons/action/gavel';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Work from 'material-ui/svg-icons/action/work';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Folder from 'material-ui/svg-icons/file/folder';
import Add from 'material-ui/svg-icons/content/add';
import Create from 'material-ui/svg-icons/content/create';
import Web from 'material-ui/svg-icons/av/web';
import Business from 'material-ui/svg-icons/communication/business';
import BugReport from 'material-ui/svg-icons/action/bug-report';
import Description from 'material-ui/svg-icons/action/description';
import SettingsOverscan from 'material-ui/svg-icons/action/settings-overscan';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import SettingsApplication from 'material-ui/svg-icons/action/settings-applications';
import Extension from 'material-ui/svg-icons/action/extension';
import Input from 'material-ui/svg-icons/action/input';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import GTranslate from 'material-ui/svg-icons/action/g-translate';
import FilterCenterFocus from 'material-ui/svg-icons/image/filter-center-focus';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Help from 'material-ui/svg-icons/action/help';
import MergeType from 'material-ui/svg-icons/editor/merge-type';
import ViewDay from 'material-ui/svg-icons/action/view-day';
import Dvr from 'material-ui/svg-icons/device/dvr';
import Devices from 'material-ui/svg-icons/device/devices';
import Widgets from 'material-ui/svg-icons/device/widgets';
import Cloud from 'material-ui/svg-icons/file/cloud';
import Language from 'material-ui/svg-icons/action/language';
import PieChart from 'material-ui/svg-icons/editor/pie-chart';
import BlurLinear from 'material-ui/svg-icons/image/blur-linear';


const administrationId = "sideMenuItem-administration";
const usersrolesId = "sideMenuItem-usersroles";
const manageContentId = "sideMenuItem-content";
const settingsId = "sideMenuItem-setting"
const externalSourcesId = "sideMenuItem-externalsources"


class SideMenuItems extends Component {
    constructor(props) {
        super(props);

        this._SideMenuItemHeight = 56;
    }


    handleNavigationSelection(pageToGoObject) {
        this.props.navigationFromSideMenu(pageToGoObject);
        return false;
    }


    render() {
        return (
            <SideMenu>
                <SideMenuItem label="Home"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<Home style={{fill: '#fff'}}/>} backgroundColor={blue500}/>}
                              onClick={this.handleNavigationSelection.bind(this, {path: '/', color: {blue500}, translation: ['home']})}/>
                <SideMenuItem label={this.props.expanded ? "Administration" : ""}
                              leftAvatar={<Avatar icon={<Build style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                              sideMenuExpanded={this.props.expanded}
                              subItemsLevel={1}
                              id={administrationId}
                              subItems={[
                                  <SideMenuItem
                                      label="Customers"
                                      leftAvatar={<Avatar icon={<Business style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/administration/customers',
                                          color: {red500},
                                          translation: ['administration', 'customers'],
                                          parentId: administrationId
                                      })}
                                  />,
                                  <SideMenuItem
                                      label="Error log"
                                      leftAvatar={<Avatar icon={<BugReport style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/administration/errorlog',
                                          color: {red500},
                                          translation: ['administration', 'error log'],
                                          parentId: administrationId
                                      })}
                                  />,
                                  <SideMenuItem
                                      label="Blog"
                                      leftAvatar={<Avatar icon={<ImportContacts style={{fill: '#fff'}}/>} backgroundColor={red500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/administration/blog',
                                          color: {red500},
                                          translation: ['administration', 'blog'],
                                          parentId: administrationId
                                      })}
                                  />
                              ]}
                />
                <SideMenuItem label="Users & Roles"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<Group style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                              subItemsLevel={1}
                              id={usersrolesId}
                              subItems={[
                                  <SideMenuItem
                                      label="Users"
                                      leftAvatar={<Avatar icon={<Person style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/usersroles/users',
                                          color: {indigo500},
                                          translation: ['users & roles', 'users'],
                                          parentId: usersrolesId
                                      })}
                                  />,
                                  <SideMenuItem
                                      label="Groups"
                                      leftAvatar={<Avatar icon={<GroupWork style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/usersroles/circles',
                                          color: {indigo500},
                                          translation: ['users & roles', 'circles'],
                                          parentId: usersrolesId
                                      })}
                                  />,
                                  <SideMenuItem
                                      label="Roles"
                                      leftAvatar={<Avatar icon={<Gavel style={{fill: '#fff'}}/>} backgroundColor={indigo500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/usersroles/users',
                                          color: {indigo500},
                                          translation: ['users & roles', 'roles'],
                                          parentId: usersrolesId
                                      })}
                                  />
                              ]}
                />
                <SideMenuItem label="Graphs"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<TrendingUp style={{fill: '#fff'}}/>} backgroundColor={pink500}/>}
                              onClick={this.handleNavigationSelection.bind(this, {
                                  path:'/generalPage'
                              })}/>
                <SideMenuItem label="Reports"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<Dashboard style={{fill: '#fff'}}/>} backgroundColor={teal500}/>}
                              onClick={this.handleNavigationSelection.bind(this, {
                                  path:'/generalPage'
                              })}/>
                <SideMenuItem label="Document management"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<Folder style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                              subItemsLevel={1}
                              id={manageContentId}
                              subItems={[
                                  <SideMenuItem
                                      label="Create"
                                      leftAvatar={<Avatar icon={<Add style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/content/create',
                                          color: {lime500},
                                          translation: ['document management', 'create'],
                                          parentId: manageContentId
                                      })}
                                  />,
                                  <SideMenuItem
                                      label="Edit"
                                      leftAvatar={<Avatar icon={<Create style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/content/edit',
                                          color: {lime500},
                                          translation: ['document management', 'edit'],
                                          parentId: manageContentId
                                      })}
                                  />,
                                  <SideMenuItem
                                      label="Overview"
                                      leftAvatar={<Avatar icon={<ViewList style={{fill: '#fff'}}/>} backgroundColor={lime500}/>}
                                      onClick={this.handleNavigationSelection.bind(this, {
                                          path: '/content/overview',
                                          color: {lime500},
                                          translation: ['document management', 'overview'],
                                          parentId: manageContentId
                                      })}
                                  />
                              ]}
                />
                <SideMenuItem label="Service page"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<Web style={{fill: '#fff'}}/>} backgroundColor={green500}/>}
                              onClick={this.handleNavigationSelection.bind(this, {
                                  path:'/generalPage'
                              })}/>
                <SideMenuItem label="Settings"
                              sideMenuExpanded={this.props.expanded}
                              leftAvatar={<Avatar icon={<Settings style={{fill: '#fff'}}/>} backgroundColor={yellow700}/>}
                              onClick={this.handleNavigationSelection.bind(this, {
                                  path:'/generalPage'
                              })}/>
            </SideMenu>
        )
    }

}

function mapStateToProps(state) {
    return {expanded: state.globalReducer.sideMenuExpanded};
}

export default connect(mapStateToProps, actions)(SideMenuItems);