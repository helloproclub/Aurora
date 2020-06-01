import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const TextArea = ({ textAreaName, placeholder, disabled }) => {
    if(textAreaName !== undefined){
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
    }else{
        return <span className="textarea-name">You need to add textAreaName prop to use this!</span>
    }
}

TextArea.defaultProps = {
    // textAreaName: "Fieldtext Area",
    placeholder: "Use this for description",
    disabled: false,
}

TextArea.propTypes = {
    textAreaName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export default TextArea;