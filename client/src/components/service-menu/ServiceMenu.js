import React, {useState} from 'react';
// import Menu from './Menu.js';
import Categories from './Categories.js';
import items from './data.js';
import Footer from '../footer';
import { Container} from 'reactstrap';
import NavPane from '../../containers/NavbarContainer.js';

// import '../../css/service-menu/service-menu.css';

//import model?
// import ServiceMenuModel from '../../../server/models/ServiceMenu.js';
// const menuInfo = ServiceMenuModel;

// import ApptForm from '../appointment-form/appt-form.js';
import Menu from './data.js';

function ServiceMenu() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories] = useState(Categories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }
    return (
        <Container>
            <NavPane />
            <div className="menu-section">
                <div className="title">
                    <h2>Our Services</h2>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                {/* <Button><a href={ApptForm}>Book An Appointment</a></Button> */}
                <Menu items={menuItems} />
            </div>
            <Footer />
        </Container>
    );
}

export default ServiceMenu;