import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const Card = (props) => {
  const { style, item } = props;
  style.cursor = 'move';
  return (
    <li style={style} className="list-group-item" id={style ? item.id : null}>
      {item.title}
    </li>
  );
};

Card.propTypes = propTypes;

export default Card;
