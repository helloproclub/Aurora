import React from 'react';
import Proptypes from 'prop-types';
import '../../public/fonts.scss';
import '../../public/font-color.scss';
import './style.scss';

const InputRadioBox = ( { type, radioName, disabled, checked} ) => {
    return ( 
        <div> 
            <div class="input-radio">
                <input type={type} name="radio" disabled={ disabled } checked={ checked } />
                <label className="radio-name"> { radioName } </label> 
                <span className="checkmark"></span>
                <span className="small-checkmark"></span>
            </div>             
        </div>         
    )    
}

InputRadioBox.defaultProps = {
    type: "radio",
    disabled: false, 
    radioName: "Chosen",    
}

InputRadioBox.propTypes = {
    radioName : Proptypes.string.isRequired,
    type : Proptypes.string,
    disabled : Proptypes.bool,    
    checked : Proptypes.bool, 
}

export default InputRadioBox;