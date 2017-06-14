import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ANIMATE_SIDEMENU } from '../../actions/types';


import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';


import styles from './leftBar.css';

class LeftBar extends Component {
    constructor(props) {
        super(props);

        //the size of the menu/x buttons width and height
        this._menuIconSize = 30;

        this.state = {
            dynamicStyle: {width: this.props.expanded ? this.props.openedWidth : this.props.closedWidth},

        }
    }

    animateSideMenu() {
        this.props.dispatch({type: ANIMATE_SIDEMENU, payload: this.props.expanded ? false : true});
        this.setState({
            dynamicStyle: {width: !this.props.expanded ? this.props.openedWidth : (this.props.onlyIconsWithScrollBar ? this.props.closedWidthWithScrollBar : this.props.closedWidth)}
        });
        this.props.onAnimate(!this.props.expanded);
    }

    render() {
        //output the html
        return (
            <aside
                className={styles.uxalSideMenu}
                style={this.props.expanded ? this.state.dynamicStyle : (this.props.onlyIconsWithScrollBar ? {width: this.props.closedWidthWithScrollBar} : this.state.dynamicStyle)}
            >
                <FlatButton
                    icon={!this.props.expanded ? <Menu style={{fill: '#fff', height: this._menuIconSize, width: this._menuIconSize}}/> :
                        <Close style={{fill: '#fff', height: this._menuIconSize, width: this._menuIconSize}}/>  }
                    onClick={this.animateSideMenu.bind(this)}
                    style={{minWidth: 'auto', textAlign: 'left', paddingLeft: '23px', height: 48}}
                />
                <Divider />
                <div className={styles.uxalSideMenuListContainer + " " + styles.uxalSideMenuList}>
                    {this.props.children}
                </div>
            </aside>
        )
    }
}

LeftBar.propTypes = {
    /**
     * This decides if the side menu is opened or not
     */
    expanded: PropTypes.bool,

    /**
     *This is the width used for the side menu when it is closed
     */
    closedWidth: PropTypes.number,

    /**
     * This is the width used for the side menu when it is expanded
     */
    openedWidth: PropTypes.number,

    /**
     * This is the function executed when the animation takes place
     */
    onAnimate: PropTypes.func

}

LeftBar.defaultProps = {
    expanded: false,
    closedWidth: 70,
    closedWidthWithScrollBar: 80,
    openedWidth: 300
}

function mapStateToProps(state) {
    return {expanded: state.globalReducer.sideMenuExpanded, onlyIconsWithScrollBar: state.globalReducer.enlargeSideMenu};
}

export default connect(mapStateToProps)(LeftBar);