import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';

const TextArea = ({ textAreaName, placeholder, disabled }) => {
    if(textAreaName !== undefined){
        return (
            <div>
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
    placeholder: "Use this for description",
    disabled: false,
}

TextArea.propTypes = {
    textAreaName: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

export default TextArea;