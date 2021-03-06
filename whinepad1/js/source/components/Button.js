import classNames from "classnames";
import PropTypes from 'prop-types';
import React from "react";

const Button = props => {
    const cssclasses = classNames("Button", props.className);
    return props.href
        ? <a {...props} className={cssclasses} />
        : <button {...props} className={cssclasses} />;
};

Button.propTypes = {
    href: PropTypes.string
};

export default Button
