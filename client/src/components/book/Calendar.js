import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import listPlugin from '@fullcalendar/list'; // a plugin!
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      calendarWeekends: true,
      event: []
    };
    this.handleEventClick = this.handleEventClick.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }
  
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  
  handleButton = () => {
    alert(this.state.event.url)
  };
  handleEventClick = (info) => {
    console.log(info.event)
    let id = info.event.id
    let url = '/api/appointment/' + id
    let title = info.event.title
    let date = info.event.start.toDateString()
    let time = info.event.start.toLocaleTimeString()
    this.toggle();
    this.setState({event: {url, id, date, title, time}})
    console.log(this.state)
  };
  render(){
    return (
  <div>
      <FullCalendar
        plugins={[ listPlugin ]}
        initialView="listWeek"
        noEventsContent="No available appointments at this time, please check back soon!"
        eventClick={this.handleEventClick}
        events={[
          { id:1, title: 'Available Appt', start: '2021-12-05T19:30:00Z' },
          { id:2, title: 'Available Appt', start: '2021-12-05T01:30:00Z'},
          { id:3, title: 'Available Appt', start: '2021-12-05T19:30:00Z' },
          { title: 'Available Appt', start: '2021-12-05T01:30:00Z' },
          { title: 'Available Appt', start: '2021-12-05T19:30:00Z' },
          { title: 'Available Appt', start: '2021-12-05T01:30:00Z'},
          { title: 'Available Appt', start: '2021-12-05T19:30:00Z' },
          { title: 'Available Appt', start: '2021-12-05T01:30:00Z'}
        ]}
        />
        <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader toggle={this.toggle}>
                {this.state.event.title}
              </ModalHeader>
              <ModalBody>
                <div>
                    {this.state.event.date}
                </div>
              <div>
                    {this.state.event.time}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleButton}>Claim Appt</Button>
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
  </div>
    )
  }
}
export default Calendar