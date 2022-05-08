import React from 'react'
import './meetups.css'

function MeetupItem(props) {
  return (
    <div className="col">
        <div className='card'>
            <img className='meetup__image' src={props.image} alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.description}</p>
                <button className='btn btn-primary'>Add to Favorites</button>
            </div>
        </div>
    </div>
  )
}

export default MeetupItem