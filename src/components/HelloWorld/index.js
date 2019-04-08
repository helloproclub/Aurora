import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const HelloWorld = ({ name }) => (
  <h1 className="container">
Hello
    <span className="name">{ name }</span>
  </h1>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
