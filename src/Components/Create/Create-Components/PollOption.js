import React from "react";
import "./PollOption";



function PollOption() {
    return (
        <div className="Create__Options">
            <input
                className="Create__Option"
                type="text"
                placeholder="Poll Option"
            ></input>
            <select className="Create__Color">
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
                <option value="Orange">Orange</option>
                <option value="Gold">Gold</option>
                <option value="Black">Black</option>
            </select>
        </div>
    );
}

export default PollOption;
