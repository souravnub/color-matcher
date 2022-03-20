import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
    const [shadeDifference, setShadeDifference] = useState(10);
    const [InputColor, setInputColor] = useState("#f15025");
    const [error, setError] = useState(false);
    const [List, setList] = useState(new Values("#f15025").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(InputColor).all(shadeDifference);
            setError(false);

            setList(colors);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <section className="container">
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="color-val">Hex color</label>
                        <input
                            className={`${error === true ? "error" : ""}`}
                            type="text"
                            id="color-val"
                            value={InputColor}
                            placeholder="Enter Color Code here"
                            onChange={(e) => {
                                setInputColor(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="shade-val">Shade Difference</label>
                        <input
                            type="number"
                            id="shade-val"
                            placeholder="Shade Difference"
                            value={shadeDifference}
                            onChange={(e) => {
                                setShadeDifference(parseInt(e.target.value));
                            }}
                        />
                    </div>

                    <button type="submit" className="btn">
                        submit
                    </button>
                </form>
            </section>
            <section className="colors">
                {List.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            rgb={color.rgb}
                            weight={color.weight}
                            type={color.type}
                            hex={color.hex}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
