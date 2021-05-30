import React from "react";
import "../Create.css";
import  IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

function AddMoreOptionsButton({ pollAmount, setPollAmount }) {
    const handleClick = (e) => {
        e.preventDefault();
        setPollAmount(pollAmount + Number(1));
    };

    return (
        <div className="Create__AddMore">
            <IconButton className="Create__Icon" onClick={handleClick}>
                <AddIcon></AddIcon>
            </IconButton>
        </div>
    );
}

export default AddMoreOptionsButton;
