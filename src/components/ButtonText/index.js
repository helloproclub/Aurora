import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';


const ButtonText = ( {text, type, disabled} ) => {
    return(
        <button 
                type={ type } 
                onClick={ () => {
                    alert('Hai')
                } } 
                disabled={ disabled }
                className={ `kebab-case` }
            > 
                { text }
        </button>
    )
}

ButtonText.defaultProps = {
    type: "button",                
    disabled: false
}

ButtonText.propTypes = {
    text: PropTypes.string.isRequired,    
    type: PropTypes.string,
    disabled: PropTypes.bool,     
}

export default ButtonText;