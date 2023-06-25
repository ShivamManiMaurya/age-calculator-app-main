import React from "react";
import Input from "./Input";
import btn from "../assets/images/icon-arrow.svg";
import Output from "./Output";

const main = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {};

    return (
        <div className=" bg-custom-offWhite flex items-center justify-center m-auto h-full">
            <div className=" bg-white w-screen h-[26rem] mx-4 rounded-s-3xl rounded-se-3xl rounded-ee-[5rem]">
                <div className=" flex justify-between gap-4 mx-4 mt-10">
                    <Input type="DAY" val="DD" />
                    <Input type="MONTH" val="MM" />
                    <Input type="YEAR" val="YYYY" />
                </div>
                <div className="mx-4 my-7">
                    <button
                        className="border bg-custom-purple p-4 rounded-full z-30 relative"
                        onClick={handleClick}
                    >
                        <img src={btn} alt="" className=" w-7" />
                    </button>
                    <div className="w-[80%] border-b-2 absolute right-5 top-[18.5rem] mx-4"></div>
                </div>
                <div
                    className=" text-5xl italic font-bold text-left mx-4"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    <Output output="38" type="years" />
                    <Output output="3" type="months" />
                    <Output output="26" type="days" />
                </div>
            </div>
        </div>
    );
};

export default main;
