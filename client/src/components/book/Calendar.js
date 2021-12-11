import React from 'react';
import {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import listPlugin from '@fullcalendar/list'; // a plugin!
import { useQuery, useMutation } from '@apollo/client';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {QUERY_AVAILABLE_APPT} from "../../utils/queries"
import {BOOK_APPT} from "../../utils/mutations"


function Calendar(props) {
    const [modal,setModal] = useState(false)
    const [calendarWeekends,setCalendarweekends] = useState(true)
    const [event, updateEvent] = useState([])
    const {loading, error, data} = useQuery(QUERY_AVAILABLE_APPT,{
      variables: {
        avail: true,
      },
      fetchPolicy: "network-only"
    })
    const [bookAppt, {reset}] = useMutation(BOOK_APPT)
    
    let initialEvents = data?.appts || [];

    const activateModal = () => {
     setModal(true);
    }
    const closeModal = () => {
        setModal(false)
    }
  
   
  const handleButton = () => {
     console.log(event)
     bookAppt({variables: { id: event.id}})
     closeModal()
     window.location.reload()
   };

     const handleEventClick = (info) => {
     let id = info.event.extendedProps._id
     let title = info.event.title
     let date = info.event.start.toDateString()
     let time = info.event.start.toLocaleTimeString()
     updateEvent({id, date, title, time})
     activateModal()
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
                rerenderEvents
                initialEvents = {initialEvents}
                />
          )}
        <Modal
              isOpen = {modal}
              onClosed = {() => reset()}
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