import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const [width, setWidth] = useState('');
    const [height,setHeight] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {
            width,
            height,
            backgroundColor,
        };
        addBox(newBox);
        setWidth('')
        setHeight('');
        setBackgroundColor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Width:
                <input
                type="text"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
            </label>
            <label>
                <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                />
            </label>
            <button type="submit"> ADD BOX </button>
        </form>
    );
};

export default NewBoxForm;