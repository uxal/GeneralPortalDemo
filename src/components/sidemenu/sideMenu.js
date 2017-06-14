import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}
export default SideMenu;
