import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import listviewPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = () => (
  <div>
      <FullCalendar
        plugins={[ listviewPlugin ]}
        initialView="listWeek"
      />
  </div>
);

export default Calendar;