import React from 'react'
import './Create.css'
import PollTitle from './Create-Components/PollTitle'
import PollOption from './Create-Components/PollOption'
import PollSubmit from './PollSubmit'
function Create() {
    return (
        <div className="Create">
        <form className="Create__Form">
            <PollTitle/>
            <PollOption/>
            <PollOption/>
            <PollOption/>
            <PollOption/>
            <PollOption/>
            <PollSubmit/>

        </form>
    </div>
    )
}

export default Create
