import React from 'react';

const Box = ({ id, backgroundColor, width, height, handleDelete }) => {
  const boxStyle = {
      width: 5,
      height: 5,
      backgroundColor: "yellow",
    position: 'relative',
    margin: '20px',
  };

  const handleRemove = () => {
    handleDelete(id);
  };


  return (
    <div style={boxStyle}>
      <button onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default Box;
