import React from 'react';

function Button(props) {
 return(
  <div className="square-btn" style={props.style} onClick={props.onClick}>
  {props.value}
  </div>
  );
}

export default Button;