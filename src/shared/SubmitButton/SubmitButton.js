import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

const SubmitButton = ({ label, isLoading }) => {
  return (
    <>
      <input
        disabled={isLoading}
        type="submit"
        className="btn btn-primary"
        value={label}
      />{" "}
      {isLoading && <Spinner />}
    </>
  );
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

SubmitButton.defaultProps = {
  isLoading: false
};

export default SubmitButton;
