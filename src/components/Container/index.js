import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Container = ({ backgroundColor }) => {
    return (
        <div className={`palette ${backgroundColor}`}></div>
    );
};

Container.defaultProps = {
    backgroundColor: "background-default",
}

Container.propTypes = {
    backgroundColor: PropTypes.string,
}

export default Container