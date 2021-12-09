import React from 'react';
import {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import listPlugin from '@fullcalendar/list'; // a plugin!
import { useQuery } from '@apollo/client';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {QUERY_AVAILABLE_APPT} from "../../utils/queries"


function Calendar(props) {
    const [modal,setModal] = useState(false)
    const [calendarWeekends,setCalendarweekends] = useState(true)
    const [event, updateEvent] = useState([])
    const {loading, error, data} = useQuery(QUERY_AVAILABLE_APPT)
    
    const events = data?.appts || [];

    const activateModal = () => {
     setModal(true);
    }
    const closeModal = () => {
        setModal(false)
    }
  
   const handleButton = () => {
     console.log(event.url)
   };

     const handleEventClick = (info) => {
     console.log(info.event)
     let id = info.event.id
     let url = '/api/appointment/' + id
     let title = info.event.title
     let date = info.event.start.toDateString()
     let time = info.event.start.toLocaleTimeString()
     updateEvent({url, id, date, title, time})
     activateModal()
     console.log(event)
   };
    return (
      <div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>We're sorry, online appointment booking is not available at this time, please call <a href='tel:804-222-1111' >(Not) are-alnum</a> to setup your appt</div>
          ) : (
              <FullCalendar
                plugins={[ listPlugin ]}
                initialView="listWeek"
                noEventsContent="No available appointments at this time, please check back soon!"
                eventClick={handleEventClick}
                 events= {events}
                />
          )}
        <Modal
              show ={modal}
            >
              <ModalHeader closeModal>
                {event.title}
              </ModalHeader>
              <ModalBody>
                <div>
                    {event.date}
                </div>
              <div>
                    {event.time}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleButton}>Claim Appt</Button>
                <Button color="secondary" onClick={closeModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
  </div>
    )
}
export default Calendar