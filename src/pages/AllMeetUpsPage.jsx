import { useState, useEffect, useContext } from "react";

import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../storage/FavoritesContext";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetups-539a2-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const meetups = [];

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false)
        setMeetupData(meetups)
    });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <div role={"status"} className="spinner-border text-info">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-5">
      <p className="text-center h4 mt-3 mb-4">All Meetups</p>
      <MeetupList meetups={meetupData} />
    </div>
  )
}

export default AllMeetUpsPage;