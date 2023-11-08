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

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(( box, index) =>(
                <Box
                key={box.id}
                backgroundColor={box.backgroundColor}
                height={box.height}
                width={box.width}
                handleDelete= {handleDelete}
                />
            ))}
        </div>
    );
};

export default BoxList;