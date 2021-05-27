import React from 'react'
import './Create.css'
import PollTitle from './Poll-Title/PollTitle'
import PollOption from './Poll-Option/PollOption'
function Create() {
    return (
        <div className="Create">
        <form className="Create__Form">
            <PollTitle/>
            <PollOption/>
        </form>
    </div>
    )
}

export default Create
