/**
 * Define the routes in this file
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { BasePath } from './config';

import * as actions from './actions/navigation';

import App from './components/app';
import HomePage from './components/home/home';
import RequireAuth from './components/authentication/require_authentication';

/**
 * Import pages
 */
import Signin from './pages/signin/signin';
//administration
import Administration from './pages/administration/index';
import Customers from './pages/administration/customers';
import ErrorLog from './pages/administration/errorLog';
import Blog from './pages/administration/blog';
//users&roles
import UserRoles from './pages/usersroles/index';
import Users from './pages/usersroles/users';
import Circles from './pages/usersroles/circles';
import Roles from './pages/usersroles/roles';
//content
import ContentManagement from './pages/content/index';
import Create from './pages/content/create';
import Edit from './pages/content/edit';
import Overview from './pages/content/overview';
//settings
import SettingsManagement from './pages/settings';

const TestComponent1 = () => <h3>Page 1</h3>
const TestComponent2 = () => <h3>Page 2</h3>
const GenericPageComponent = () => (
    <div>
        <h3>This is a generic page component until the final page is implemented</h3>
        <p>Use <b>Administration</b>, <b>Users&Roles</b> or <b>Document management</b> to see some implemented pages</p>
        <p><i>On administration/customers you'll find a jqWidget grid</i></p>
    </div>
    )

    class GoToRoot extends Component {
        componentWillMount() {
        browserHistory.push(`${BasePath}/`)
    }

        render() {
        return <div></div>
    }
    }

    const appRoutes = [
    {
        path: `${BasePath}/`,
        component: App,
        indexRoute: {component: HomePage},
        childRoutes: [
    {
        path: `${BasePath}/signin`,
        component: Signin
    },
    {
        path: `${BasePath}/administration`,
        component: RequireAuth(Administration, 'usermodule')
    },
    {
        path: `${BasePath}/administration/customers`,
        component: RequireAuth(Customers, 'customers'),
    },
    {
        path: `${BasePath}/administration/errorlog`,
        component: RequireAuth(ErrorLog, 'errorLog'),
    },
    {
        path: `${BasePath}/administration/blog`,
        component: RequireAuth(Blog, 'blog'),
    },
    {
        path: `${BasePath}/usersroles`,
        component: RequireAuth(UserRoles, 'usermodule')
    },
    {
        path: `${BasePath}/usersroles/users`,
        component: RequireAuth(Users, 'users')
    },
    {
        path: `${BasePath}/usersroles/circles`,
        component: RequireAuth(Circles, 'groups')
    },
    {
        path: `${BasePath}/usersroles/roles`,
        component: RequireAuth(Roles, 'roles')
    },
    {
        path: `${BasePath}/content`,
        component: RequireAuth(ContentManagement, 'managecontent')
    },
    {
        path: `${BasePath}/content/create`,
        component: RequireAuth(Create, 'onlineEditor')
    },
    {
        path: `${BasePath}/content/edit`,
        component: RequireAuth(Edit, 'onlineEditor')
    },
    {
        path: `${BasePath}/content/overview`,
        component: RequireAuth(Overview, 'articleManagement')
    },
    {
        path: `${BasePath}/settings`,
        component: RequireAuth(SettingsManagement, 'settingsmodule')
    },
    {
        path: `${BasePath}/generalPage`,
        component: GenericPageComponent
    },
    {
        path: `${BasePath}/page1`,
        component: TestComponent1
    },
    {
        path: `${BasePath}/page2`,
        component: TestComponent2
    }
        ]
    },
    {
        path: '*',
        component: GoToRoot
    }
    ]


    class AppRouting extends Component {
        componentWillMount() {
        browserHistory.listenBefore((nextRoute) => {
        //TO DO:
        //try to call the authentication method here too
        //console.log(appRoutes[0].childRoutes);

    }).bind(this);
    }

        render() {
        return (<Router history={browserHistory} routes={appRoutes}/>);
    }
    }

    export default connect(null, actions)(AppRouting);