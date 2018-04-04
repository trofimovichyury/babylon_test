import React, { Component } from 'react';
import PropTypes from 'prop-types';
import labelStore from '../store/Label';
import './Label.css';

export default class Label extends Component {
    static propTypes = {
        for: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ])
    };

    handleOnClick = () => {
        const { for: for_props } = this.props;
        if (for_props !== undefined) {
            labelStore.emit(`onclick_${for_props}`);
        }
    };

    render() {
        return (
            <span
                className="Label"
                onClick={this.handleOnClick}
            >
                {this.props.children}
            </span>
        )
    }
}