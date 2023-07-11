import React from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';

export const Button = ({ value, btnClick, onEqual, onClear, onAllClear }) => {

  function onBtnClick() {
    if(value=="="){
      onEqual();
    
    }else if(value=="C"){
      onClear();
    }else if(value==="AC"){
      onAllClear();
    }
    else{
      btnClick(value)
    }
    
  }

  return (
    <div className="toggle">
      <input onClick={onBtnClick} value={value} type="checkbox" />
      <span className="button"></span>
      {
        value=="C"?  <span className="label"><BackspaceIcon/></span> :   <span className="label">{value}</span>
      }
    
    </div>
  );
};
