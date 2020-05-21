import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const TextArea = ({ textAreaName, placeholder, disabled }) => {
    return (
        <div>
            <span className="textarea-name">{textAreaName}</span>
            <textarea
                disabled={disabled}
                className={`text-area`}
                placeholder={placeholder}
            >
            </textarea>
        </div>
    )
}

TextArea.defaultProps = {
    textAreaName: "Fieldtext Area",
    placeholder: "Use this for description",
    disabled: false,
}

TextArea.propTypes = {
    textAreaName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export default TextArea;