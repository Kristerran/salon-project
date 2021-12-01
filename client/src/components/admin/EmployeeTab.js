import React, { Component } from 'react';
import axios from 'axios';
import EmployeeTable from './ProductTable.js';
import AddEmployee from './store/AddItem.js';
import EmployeeHistoryLog from './HistoryLog.js';
import EmployeeSalesTable from './OrderTable.js'
import ViewAllEmployeeCalendars from '/EmployeeCalendars.js';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiList: [],
            activeTab: '1'
        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get('/api/employees')
            const apiList = await response.data;
            this.setState({ apiList })
        } catch (error) {
            console.log(error);
        }
    }

    toggle = tab => this.state.activeTab !== tab && this.setState({ activeTab: tab });

    render() {

        const styles = {
            tab1: {
                cursor: 'pointer',
                backgroundColor: '#cd5957',
                color:'white'
              },
              tab2: {
                cursor: 'pointer',
                backgroundColor: '#78a4a2',
                color:'white'
              },
              tab3: {
                cursor: 'pointer',
                backgroundColor: '#66bceb',
                color:'white'
              },
              tab4: {
                cursor: 'pointer',
                backgroundColor: '#ffce56',
                color:'white'
            },
            tab5: {
                cursor: 'pointer',
                backgroundColor: 'black',
                color:'white'
              },
        }
        return (
            <div>
              <Nav tabs>
                <NavItem>
                  <NavLink style={styles.tab1} onClick={() => { this.toggle('1'); }}>
                    <b>Employee Directory</b>
                  </NavLink> 
                </NavItem>
                <NavItem>
                  <NavLink style={styles.tab2} onClick={() => { this.toggle('2'); }}>
                    <b>Add New Employee</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.tab3} onClick={() => { this.toggle('3'); }}>
                    <b>Employee History Log</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={styles.tab4} onClick={() => { this.toggle('4'); }}>
                    <b>Employee Sales Log</b>
                  </NavLink>
                 </NavItem>
                <NavItem>
                  <NavLink style={styles.tab5} onClick={() => { this.toggle('5'); }}>
                    <b>View All Employee Calendars</b>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <EmployeeTable stylesTab1={styles.tab1}/>
                </TabPane>
                <TabPane tabId="2" style={styles.tab2}>
                  <AddEmployee />
                </TabPane>
                <TabPane tabId="3">
                  <EmployeeHistoryLog stylesTab4={styles.tab3} />
                    </TabPane>
                <TabPane tabId="4">
                  <EmployeeSalesTable stylesTab4={styles.tab4} />
                    </TabPane>
                <TabPane tabId="5">
                  <ViewAllEmployeeCalendars stylesTab4={styles.tab5} />
                </TabPane>
              </TabContent>
            </div>
          )
        }
};