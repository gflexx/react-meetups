import React from 'react'
import MeetupItem from './MeetupItem'
import './meetups.css'

function MeetupList(props) {
  return (
    <div className='container'>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            { props.meetups.map((meetup) => (
                <MeetupItem 
                    key={meetup.id}
                    title={meetup.title}
                    image={meetup.image}
                    description={meetup.description}
                />
            ))}
        </div>
    </div>
  )
}

export default MeetupList