import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes([...boxes,newBox]);
    };

    const handleDelete = (id) => {
        const updatedBoxes = boxes.filter((box) => box.id !== id);
        setBoxes(updatedBoxes);
    };
    const boxComponents = boxes.map(box => (
        <Box
        key={box.id}
        backgroundColor={box.backgroundColor}
        height={box.height}
        width={box.width}
        handleDelete= {handleDelete}
        />
    ));

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    );
};

export default BoxList;