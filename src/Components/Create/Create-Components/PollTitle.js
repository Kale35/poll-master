import React from 'react'

function PollTitle(props) {
    const update = e => {
        const setQuestion = props.question;
        setQuestion(e.target.value)
    }
    return (
        <div>
            <input
                className="Create__Title"
                type="text"
                placeholder="Poll Title"
                minLength={3}
                required={true}
                onChange={(e) => update(e)}
            ></input>
        </div>
    )
}

export default PollTitle;
