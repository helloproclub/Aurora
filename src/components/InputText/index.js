import React from 'react';
import PropTypes from 'prop-types';
import '../../public/fonts.scss';
import '../../public/font-color.scss';
import './style.scss';



const InputText = ( {fieldName, placeholder, type, disabled, borderColor} ) => {
    return(
        <div class="input-field">
            <label for="" class="fieldname">{ fieldName }</label>
            <input type={ type } className={ borderColor }  placeholder={ placeholder } disabled={ disabled } />
            <div class="info-text">
                <p>Helper Text</p>
                <p> | </p>
                <p>Warning Text</p>
            </div>
        </div>        
    )
}

InputText.defaultProps = {
    type: "text",                
    disabled: false,    
    borderColor: "default",
    placeholder: "Enter your answer here",
}

InputText.propTypes = {
    fieldName: PropTypes.string.isRequired,    
    type: PropTypes.string,
    disabled: PropTypes.bool,  
    borderColor: PropTypes.string,    
    placeholder: PropTypes.string,    
}

export default InputText;