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
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
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
          { title: 'Available Appt', start: '2021-12-05T19:30:00Z' },
          { title: 'Available Appt', start: '2021-12-05T01:30:00Z'},
          { title: 'Available Appt', start: '2021-12-05T19:30:00Z' },
          { title: 'Available Appt', start: '2021-12-05T01:30:00Z'},
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
                EVENT TITLE SHOULD GO HERE: {this.state.event.title}
              </ModalHeader>
              <ModalBody>
                <div>
                  EVENT INFO SHOULD GO HERE: {this.state.event.start}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Do Something</Button>{" "}
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