import React, {useEffect, useState, useCallback} from 'react'
import './Events.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import moment from "moment";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 1,
    margin: 1,
    background: '#e3e3e3',
    borderStyle: 'none',
    marginBottom: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Events = () => {
    const [events, setEvents] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [venue, setVenue] = useState('')

    const fetchData = useCallback(() => {
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
    }, [])

    useEffect(() => {
       fetchData()
    },[fetchData])

    const classes = useStyles();

    const resetForm = () => {
        setName('')
        setDescription('')
        setStart('')
        setEnd('')
        setVenue('')
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: 'http://localhost:5000/events',
            data: {
                name: name,
                description: description,
                start: start,
                end: end,
                venue: venue
            }
        }).then(() => {
            resetForm()
            fetchData()
        }).catch((err) => {
            console.log(err);
        })
    }

    const onDeleteEvent = (id) => {
        console.log(id)
        debugger
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/events/${id}`
        }).then(() => {
            fetchData()
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="events-container">
            <h2 className="events-header" >Manage Events</h2>
            <div className="add-events-container">
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <div className="row add-event-form-row">
                        <div className='col-12'>
                            <div className="form-group">
                                <label>Event Name: </label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row add-event-form-row">
                        <div className='col-12'>
                            <div className="form-group">
                                <label>Description: </label>
                                <textarea type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value) } />
                            </div>
                        </div>
                    </div>
                    <div className="row add-event-form-row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <TextField id="datetime-local" 
                                label="Start Date & Time" 
                                type="datetime-local"  
                                className={classes.textField}
                                value={start}
                                onChange={(e) => setStart(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='row add-event-form-row'>
                        <div className="col-md-12">
                            <div className="form-group">
                                <TextField
                                id="datetime-local"
                                label="End Date & Time"
                                type="datetime-local"
                                className={classes.textField}
                                value={end}
                                onChange={(e) => setEnd(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='row add-event-form-row'>
                        <div className='col-12'>
                            <div className="form-group">
                                <label>Venue: </label>
                                <select type="text" className="form-control" value={venue} onChange={(e) => setVenue(e.target.value)}>
                                <option value='Select' hidden>Select</option>
                                <option value='SLIIT Auditorium'>SLIIT Auditorium</option>
                                <option value='SLIIT Mini Auditorium'>SLIIT Mini Auditorium</option>
                                <option value='Dialog Axiata Auditorium'>Dialog Axiata Auditorium</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row add-event-form-row'>
                        <div className='col-12'>
                            <div className="form-group">
                                <input
                                type="submit"
                                value="Add Event"
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#01bf71",
                                    fontWeight: "bold",
                                }}
                                className="btn" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
                <div className="event-cards-container">
                    {events && events.map((event, id) => (
                    <Card className={classes.root} variant="outlined" key={id}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {moment(event.start).format("MMM Do YY")}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {event.name}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        {event.venue}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {event.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" style={{backgroundColor: '#01bf71'}}  onClick={() => onDeleteEvent(event._id)} >Delete</Button>
                    </CardActions>
                  </Card>
                )) }
            </div>
        </div> 

    )
}

export default Events
