import { useContext } from "react"
import { React, useState } from 'react'
import FavoritesContext from "../storage/FavoritesContext"
import MeetupList from "../components/meetups/MeetupList"

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)
  let content;
  if(favoritesCtx.totalFavourites === 0){
    content = <p className="text-center ">No favorites yet</p>;
  } else{
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <div>
        <p className="text-center h4 mt-3 mb-5">Favorite Meetups</p>

        { content }

    </div>
  )
}

export default FavoritesPage