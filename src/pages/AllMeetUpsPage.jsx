import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DATA = [
  {
    id: '1',
    title: 'Nairobi',
    image: 'https://urbankenyans.com/wp-content/uploads/2018/10/nairobi.jpg',
    description: 'This is the capital city of kenya. Has among the tallest buildings in Africa',
  },{
    id: '2',
    title: 'Mt Kenya',
    image: 'https://www.planetware.com/wpimages/2020/02/kenya-in-pictures-beautiful-places-to-photograph-mount-kenya.jpg',
    description: 'This is the second tallest mountain in Africa, featuring an ice cap'
  },{
    id: '3',
    title: 'Chania Falls',
    image: 'https://www.planetware.com/wpimages/2020/02/kenya-in-pictures-beautiful-places-to-photograph-chania-falls-aberdares.jpg',
    description: 'This are the tallest waterfalls in kenya. Found near Thika which is close to nairobi'
  }
]

function AllMeetUpsPage() {
  return (
    <div>
      <p className="text-center h4 mt-3 mb-4">All Meetups</p>
      <MeetupList meetups={DATA} />
    </div>
  )
}

export default AllMeetUpsPage;