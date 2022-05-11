import { useContext } from 'react';
import FavoritesContext from '../../storage/FavoritesContext';

import React from 'react'
import './meetups.css'

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.isFavorite(props.id);

  function toggleFavoritesHandler(){
    if(isFavorite){
      favoritesCtx.removeFavorite(props.id)
    }else{
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image
      })
    }
  }

  return (
    <div className="col">
        <div className='card'>
            <img className='meetup__image' src={props.image} alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.description}</p>
                <button className='btn btn-primary' id={props.id} 
                  onClick={toggleFavoritesHandler}>
                  {isFavorite ? 'Remove from Favorites': 'Add to Favorites'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default MeetupItem