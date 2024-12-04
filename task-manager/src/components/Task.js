import React from "react";
import PropTypes from "prop-types";

function Task({title, description}){
    return(
        <div className="task">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

Task.prototype={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Task;