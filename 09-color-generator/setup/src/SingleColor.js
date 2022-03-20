import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, type, hex }) => {
    const [alert, setAlert] = useState("");
    const hexVal = `#${hex}`;
    const handleColorClick = (val) => {
        setAlert(val);
        navigator.clipboard.writeText(val);
        setTimeout(() => {
            setAlert("");
        }, 2500);
    };
    return (
        <>
            <article
                onClick={() => handleColorClick("#" + hex)}
                className={`color ${type === "shade" ? "color-light" : ""}`}
                style={{ background: hexVal }}>
                <p className="percent-value">{weight}%</p>
                <p className="color-value">{hexVal}</p>
                {alert === hexVal ? <p className="alert">copied</p> : <></>}
            </article>
        </>
    );
};

export default SingleColor;
