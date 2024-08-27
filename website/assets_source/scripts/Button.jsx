import React from "react";

function Button({buttonAction, buttonText}) {
    return (
        <div>
            <p onClick={buttonAction}>{ buttonText }</p>
        </div>
    )
};

export default Button;