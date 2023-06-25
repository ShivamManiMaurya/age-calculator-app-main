import React from "react";

const Output = ({ output, type }) => {
    return (
        <div>
            <h1>
                <span className=" text-custom-purple p-2">{output}</span>
                {type}
            </h1>
        </div>
    );
};

export default Output;
