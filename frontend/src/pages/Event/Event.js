import React, {useEffect, useCallback, useState} from 'react'
import axios from 'axios'
import './Event.css'
import ClearIcon from '@material-ui/icons/Clear';
import moment from "moment";

const Event = () => {
    const [event, setEvent] = useState([])

    const fetchData = useCallback(() => {
        const eid = localStorage.getItem('selectedEvent')
        axios({
            method: "GET",
            url: `http://localhost:5000/events/${eid}`,
          })
            .then((response) => {
              setEvent(response.data.data);
            })
            .catch((err) => {
              console.log(err);
            });
    }, [])

    useEffect(() => {
       fetchData()
    },[fetchData])

    console.log(event)

    const goBack = () => {
        window.location = '/'
        localStorage.removeItem('selectedEvent')
    }

    return (
        <div>
            <div className="event-container">
            <div className="clear-icon" onClick={()=> goBack()}>
            <ClearIcon fontSize="large"/>
            </div>
            <h2 className="header">{ event.name }</h2>
            <div className="row">
                <div className="col-md-8"><img className="event-image" src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" /></div>
                <div className="col-md-4">
                    <div>
                        <label className="event-label">Date</label><br/><p className="event-details">{moment(event.start).format("MMM Do YYYY")}</p>
                    </div>
                    <hr/>
                    <div>
                        <label className="event-label">Time</label><br/><p className="event-details">{moment(event.start).format('LT')}{''}-{''}{moment(event.end).format('LT')}</p>
                    </div>
                    <hr/>
                    <div>
                        <label className="event-label">Venue</label><br/><p className="event-details">{event.venue}</p>
                    </div>
                    <hr/>
                    <div>
                        <label className="event-label">Speakers</label><br/>
                    </div>
                </div>
            </div>
            <div className="event-description">
                <p>{ event.description }</p>
            </div>
            </div>
        </div>
    )
}

export default Event