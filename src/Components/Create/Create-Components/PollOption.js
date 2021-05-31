import React, {useState} from "react";




function PollOption(props) {
    const [savedColor, setSavedColor] = useState("");

    const update = (e) => {
        const updt = props.update;
        updt(e.target.value);
    }
    
    const handleColorChange = (e) => {
        setSavedColor("");
        let curValue = e.target.value;
        let lowerCased = curValue[0].toLowerCase();
        setSavedColor(lowerCased + curValue.slice(1));
    }

    const optionColor = {
        color: savedColor
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
            <select className="Create__Color" style={optionColor} 
            onChange={(e)=>handleColorChange(e)}
            // onChange="this.className=this.options[this.selectedIndex].className"
            
            >
                <option  className="Create__Blue" value="Blue" >Blue</option>
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
