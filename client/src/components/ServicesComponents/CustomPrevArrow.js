import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

const CustomPrevArrow = (props) => {

    const { className, style, onClick } = props;

    return (
      <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <FontAwesomeIcon icon={faCarSide} />
      </div>
  )
}

export default CustomPrevArrow