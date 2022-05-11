import { useNavigate } from 'react-router-dom'

import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
  const navigation = useNavigate()

  function addMeetupHandler(meetUp){
      fetch(
        'https://react-meetups-539a2-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify(meetUp),
          headers:{
            'Content-Type': 'application/json'
          }
        }
      ).then(() => {
        navigation('/')
      })
  }
  
  return (
    <div>
        <p className="text-center h4 mt-3 mb-5">New Meetup</p>
        <NewMeetupForm addMeetup={addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupsPage;