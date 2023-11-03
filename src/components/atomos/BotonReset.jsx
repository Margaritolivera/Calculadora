import React from 'react';
// import '../Style/BotonReset.css';
import '../../Style/BotonReset.css'

const BotonReset = (props) => (
  <div className='boton-Reset' onClick={props.manejarReset}> 
    {props.children}
  </div>
);


export default BotonReset;
