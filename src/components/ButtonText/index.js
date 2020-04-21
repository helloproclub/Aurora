import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import './style.scss';



const ButtonText = ( {text, type, onPressed, disabled} ) => {
    return(
        <button 
                type={ type } 
                onClick={ () => onPressed() } 
                disabled={ disabled }
                className={ `button-text` }
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
}

ButtonText.propTypes = {
    text: PropTypes.string.isRequired,    
    type: PropTypes.string,
    disabled: PropTypes.bool,     
    onPressed: PropTypes.func,
}

export default ButtonText;