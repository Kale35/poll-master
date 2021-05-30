import React from 'react'
import {Button} from '@material-ui/core'
function PollSubmit() {
  return (
    <div className="Create__Submit">
      <Button
        className="Create__SubmitButton"
        type="submit"
        value="Create Poll"
      >
        Create Poll
      </Button>
    </div>
  )
}

export default PollSubmit
