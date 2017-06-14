import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/navigation';

import styles from './pageContainer.css';

class Tile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: false
        }
    }

    onMouseEnter() {
        this.setState({
            hovered: true
        });
    }

    onMouseLeave() {
        this.setState({
            hovered: false
        });
    }

    handleClick() {
        this.props.navigationFromSideMenu(this.props.target);
    }

    render() {
        return (
            <div className={this.state.hovered ? styles.tileHovered : styles.tile} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}
                 onClick={this.handleClick.bind(this)}
                 style={this.state.hovered ? {background: this.props.color} : {borderColor: this.props.color}}>
                <div className={styles.tileIcon}>{this.state.hovered ? this.props.iconHovered : this.props.icon}</div>
                <div className={styles.tileEmptyLine + " hidden-xs-down"}></div>
                <div className={styles.tileText} style={this.state.hovered ? {color: '#fff'} : {color: this.props.color}}>{this.props.title}</div>
            </div>
        )
    }

}

Tile.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
    iconHovered: PropTypes.object,
    color: PropTypes.string,
    /**
     * TARGET = used for routing when clicking on a tile
     */
    target: PropTypes.object
}

export default connect(null, actions)(Tile);