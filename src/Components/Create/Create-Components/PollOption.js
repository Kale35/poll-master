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
                <option className="Create__Blue" value="Blue">Blue</option>
                <option className="Create__Red" value="Red">Red</option>
                <option className="Create__Green" value="Green">Green</option>
                <option className="Create__Purple" value="Purple">Purple</option>
                <option className="Create__Orange" value="Orange">Orange</option>
                <option className="Create__Gold" value="Gold">Gold</option>
                <option className="Create__Black" value="Black">Black</option>
            </select>
        </div>
    );
}

export default PollOption;
