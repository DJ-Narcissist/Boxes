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

  const deleteButtonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  };

  return (
    <div style={boxStyle}>
      <button onClick={handleRemove} style={deleteButtonStyle}>
        X
      </button>
    </div>
  );
};

export default Box;
