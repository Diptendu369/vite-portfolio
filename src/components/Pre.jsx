import React from "react";
import PropTypes from "prop-types";

function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

Pre.propTypes = {
  load: PropTypes.bool.isRequired, // Validates that 'load' is a required boolean prop
};

export default Pre;
