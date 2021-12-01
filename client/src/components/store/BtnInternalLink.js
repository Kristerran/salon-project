import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const propTypes = {
  link: PropTypes.string.isRequired,
  sizeBtn: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

const ButtonInternalLink = ({link, sizeBtn, content}) =>
  <Link to={link}>
    <Button size={sizeBtn}>
      {content}
    </Button>
  </Link>;

BtnInternalLink.propTypes = propTypes;

export default BtnInternalLink;