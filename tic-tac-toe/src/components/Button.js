import React from 'react';

function Button(props) {
 return(
  <div>
  <button className="square-btn" style={props.style} onClick={props.onClick}>{props.value}</button>
  </div>
  );
}

export default Button;