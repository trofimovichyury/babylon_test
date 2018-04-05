import React from 'react';
import PropTypes from 'prop-types';
import labelStore from '../store/Label';
import './Label.css';

const Label = ({ for: for_props, children }) => {
    const handleOnClick = () => {
        if (for_props !== undefined) {
            labelStore.emit(`onclick_${for_props}`);
        }
    };

    return (
        <span
            className="Label"
            onClick={handleOnClick}
        >
            {children}
        </span>
    );
};

Label.propTypes = {
    for: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
};

export default Label;