import React from "react";

function Button({handleClick, text}) {
    return (
        <button onClick={handleClick} type="button">{ text }</button>
    )
};

export default Button;