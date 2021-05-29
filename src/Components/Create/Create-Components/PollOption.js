import React from "react";



function PollOption(props) {

    const update = (e) => {
        const updt = props.update;
        updt(e.target.value);
    }


    return (
        <div className="Create__Options">
            <input
                className="Create__Option"
                type="text"
                placeholder="Poll Option"
                minLength="2"
                required={true}
                onChange={(e) => update(e)}
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
