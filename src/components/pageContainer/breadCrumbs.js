/**
 * Created by dragos on 15/02/2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/navigation';
import styles from './pageContainer.css';

import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

class BreadCrumbs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breadCrumbsList: null,
            breadCrumbsListLength: 0,
            breadCrumbsPathList: null,
            color: null
        }
    }

    componentWillMount() {
        if (this.props.navigationObject.path) {
            if (this.props.navigationObject.path.indexOf('/') === 0) {
                this.props.navigationObject.path = this.props.navigationObject.path.substring(1, this.props.navigationObject.path.length);
            }
            const pathArray = this.props.navigationObject.path.split('/');
            let color = null;
            if (this.props.navigationObject.color) {
                let colorName = null;
                for (let foundColor in this.props.navigationObject.color) {
                    colorName = foundColor;
                }
                if (colorName) {
                    color = this.props.navigationObject.color[colorName];
                }
            }
            this.setState({
                breadCrumbsList: this.props.navigationObject.translation,
                breadCrumbsListLength: pathArray.length,
                breadCrumbsPathList: pathArray,
                color
            });

        }
    }

    handleBreadCrumbClick(clickedIndex) {
        if (clickedIndex == null) {
            //go to home
            this.props.navigation('/');
        }
        else {
            if (this.props.navigationObject.parentId !== undefined)
            {
                this.props.manuallyCollapseSideMenuItem(this.props.navigationObject.parentId);
            }

            //go to a certain path
            //create the new object used for navigation
            let newPath = '';
            let newTranslationsArray = [];
            for (let i = 0; i <= clickedIndex; i++) {
                newPath += '/';
                newPath += this.state.breadCrumbsPathList[i];
                newTranslationsArray.push(this.state.breadCrumbsList[i]);
            }
            const newNavigateToObject = {
                path: newPath,
                color: this.props.navigationObject.color,
                translation: newTranslationsArray
            };
            this.props.navigationFromSideMenu(newNavigateToObject);
        }
    }

    render() {
        if (!this.state.breadCrumbsList) {
            return (
                <ul className={styles.breadCrumbsList}></ul>
            )
        }
        return (

            <ul className={styles.breadCrumbsList} style={{color: this.state.color}}>
                <li key="0">
                    <span className={styles.breadCrumbsItem}
                          onClick={this.handleBreadCrumbClick.bind(this, null)}>home</span>
                </li>
                {
                    this.state.breadCrumbsList.map((element, index) => {
                        if (index + 1 === this.state.breadCrumbsListLength) {
                            //last item
                            return (
                                <li key={index + 1}>
                                    <span className={styles.breadCrumbsSeparator}><KeyboardArrowRight /></span>
                                    <span className={styles.breadCrumbsTitle}>{element}</span>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={index + 1}>
                                    <span className={styles.breadCrumbsSeparator}><KeyboardArrowRight /></span>
                                    <span className={styles.breadCrumbsItem} onClick={this.handleBreadCrumbClick.bind(this, index)}>{element}</span>
                                </li>
                            )
                        }
                    })
                }
            </ul>

        )
    }
}

BreadCrumbs.propTypes = {
    /**
     * This component accepts an object which contains the path, the color and the translation
     */
    navigationObject: PropTypes.object
}

BreadCrumbs.defaultProps = {
    navigationObject: {
        path: '',
        color: null,
        translation: [],
        parentId:null
    }
}

export default connect(null, actions)(BreadCrumbs);