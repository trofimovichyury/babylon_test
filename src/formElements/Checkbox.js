import React, { Component } from 'react';
import PropTypes from 'prop-types'
import labelStore from '../store/Label';
import './Checkbox.css';

export default class Checkbox extends Component {
    state = {
        isChecked: false
    };

    static propTypes = {
        id: PropTypes.string
    };

    constructor(props) {
        super(props);
        const { id } = props;
        if (id !== undefined) {
            labelStore.addListener(`onclick_${id}`, () => this.setState({ isChecked: !this.state.isChecked }));
        }
    }

    handleOnClick = () => {
        this.setState({ isChecked: !this.state.isChecked });
    };

    render() {
        const className = `Checkbox ${this.state.isChecked ? 'Checkbox-checked' : 'Checkbox-unchecked'}`;
        return (
            <span
                onClick={this.handleOnClick}
                className={className}
            />
        )
    }
}