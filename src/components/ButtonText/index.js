import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import '../../public/font-color.scss';
import './style.scss';



const ButtonText = ( {text, type, onPressed, disabled, size, color} ) => {
    return(
        <button 
                type={ type } 
                onClick={ () => onPressed() } 
                disabled={ disabled }
                className={ `button-text --size-${size} font-${color}` }
            > 
                { text }
        </button>
    )
}

ButtonText.defaultProps = {
    type: "button",                
    disabled: false,
    onPressed: () => {
        alert('Selamat Datang')
    },
    color: "default",
    size: "medium",
}

ButtonText.propTypes = {
    text: PropTypes.string.isRequired,    
    type: PropTypes.string,
    disabled: PropTypes.bool,     
    onPressed: PropTypes.func,
}

export default ButtonText;