import React, { useState } from "react";
import "./Create.css";
import PollTitle from "./Create-Components/PollTitle";
import PollOption from "./Create-Components/PollOption";
import PollSubmit from "./PollSubmit";
import AddMoreOptionsButton from "./AddMoreOptionsButton";

function Create() {
    const [pollAmount, setPollAmount] = useState(0);

    return (
        <div className="Create">
            <form className="Create__Form">
                <PollTitle />
                <PollOption />
                <PollOption />
                <PollOption />

                {Array.from(Array(pollAmount), (e, i) => {
                    return <PollOption />;
                })}
                <div className="Create__Buttons">
                    <PollSubmit />
                    <AddMoreOptionsButton
                        pollAmount={pollAmount}
                        setPollAmount={setPollAmount}
                    />
                </div>
            </form>
        </div>
    );
}

export default Create;
