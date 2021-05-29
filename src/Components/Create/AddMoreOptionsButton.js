import React from "react";

function AddMoreOptionsButton({ pollAmount, setPollAmount }) {
    const handleClick = (e) => {
        e.preventDefault();
        setPollAmount(pollAmount + Number(1));
    };

    return (
        <div>
            <button onClick={handleClick}> Add A Poll Option </button>
        </div>
    );
}

export default AddMoreOptionsButton;
