import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaClock } from "react-icons/fa";

const Timeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/events",
    })
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(events);
  const openEvent = (id) => {
    localStorage.setItem('selectedEvent', id)
    window.location = '/event'
  }

  return (
    <div className="timeline-container">
      <h2 className='timeline-header'>Timeline</h2>
      <VerticalTimeline>
        {events &&
          events.map((event, key) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={moment(event.start).format("MMM Do YY")}
              icon={<FaClock />}
              iconStyle={{ color: "#fff", backgroundColor: "#01bf71" }}
              key={key}
              onTimelineElementClick={() => openEvent(event._id)}
            >
              <h3 className="vertical-timeline-element-title">{event.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {event.venue}
              </h4>
              <p>{moment(event.start).format('LT')}{''}-{''}{moment(event.end).format('LT')}</p>
              <p>
                {event.description}
              </p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
