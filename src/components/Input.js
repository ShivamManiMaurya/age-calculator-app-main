import React, { useState } from "react";

const Input = ({ type, val }) => {
    const [dateVal, setDateVal] = useState("");

    const handlechange = (e) => {
        setDateVal(e.target.value);
    };

    const formatInput = (e) => {
        // Prevent characters that are not numbers ("e", ".", "+" & "-")
        let checkIfNum;
        if (e.key !== undefined) {
            // Check if it's a "e", ".", "+" or "-"
            checkIfNum =
                e.key === "e" ||
                e.key === "." ||
                e.key === "+" ||
                e.key === "-";
        } else if (e.keyCode !== undefined) {
            // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
            checkIfNum =
                e.keyCode === 69 ||
                e.keyCode === 190 ||
                e.keyCode === 187 ||
                e.keyCode === 189;
        }
        return checkIfNum && e.preventDefault();
    };

    return (
        <div className="flex flex-col items-start w-1/3">
            <label
                htmlFor="date"
                className=" text-sm font-bold text-custom-smokeyGray tracking-widest"
            >
                {type}
            </label>
            <input
                id="date"
                type="number"
                value={dateVal}
                placeholder={val}
                className="border-2 rounded-md w-full h-12 mt-1 p-4 font-bold text-xl"
                onChange={handlechange}
                onKeyDown={formatInput}
            />
        </div>
    );
};

export default Input;
